import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, Router } from '@angular/router';
import { SongsListComponent } from '@components/cards/songs-list/songs-list.component';
import { DialogAlbumComponent } from '@components/dialog/dialog-album/dialog-album.component';
import { Album, Artist } from '@models/artist';
import { Store } from '@ngrx/store';
import { Favorites } from '@shared/helpers/favorites';
import { artistsActions } from '@store/actions';
import { selectArtistByAlbumId, selectArtistsSongs } from '@store/selectors';
import { firstValueFrom, map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    SongsListComponent
  ],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.scss'
})
export class SongsComponent implements OnInit {
  route = inject(ActivatedRoute);
  store = inject(Store);
  router = inject(Router);
  dialog = inject(MatDialog);
  favorites = inject(Favorites);

  album$ = this.route.params.pipe(
    map((params) => params['id']),
    switchMap((id) => this.store.select(selectArtistsSongs(id)))
  );
  album!: Album;
  minutesTotal: string = '';

  onSelectArtistByAlbumId(id: string): Observable<Artist | undefined> {
    return this.store.select(selectArtistByAlbumId(id));
  }

  async onEditAlbum(album: Album) {
    const artistName = await firstValueFrom(
      this.onSelectArtistByAlbumId(album.id)
    );

    const dialogRef = this.dialog.open(DialogAlbumComponent, {
      data: {
        editMode: true,
        data: { ...album, name: artistName?.name }
      },
      maxWidth: '600px',
      width: '100%'
    });

    dialogRef.afterClosed().subscribe((props) => {
      this.store.dispatch(
        artistsActions.artistsEditAlbum({
          artistName: props.name,
          album: props
        })
      );
    });
  }

  ngOnInit(): void {
    this.store.dispatch(artistsActions.artistsLoad());
    this.album$.subscribe((album) => {
      if (album) {
        this.album = album;
        const minutesTotal = album.songs.reduce((acc, song) => {
          return acc + parseFloat(song.duration.replace(':', '.'));
        }, 0);

        this.minutesTotal = minutesTotal
          .toFixed(2)
          .toString()
          .replace('.', ':');
      }
    });
  }
}
