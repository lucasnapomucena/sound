import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { AlbumListComponent } from '@components/cards/album-list/album-list.component';
import { DialogAlbumComponent } from '@components/dialog/dialog-album/dialog-album.component';
import { Store } from '@ngrx/store';
import { Favorites } from '@shared/helpers/favorites';
import { artistsActions } from '@store/actions';
import { selectArtists, selectArtistsAlbum } from '@store/selectors';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterOutlet,
    MatIconModule,
    AlbumListComponent,
    DialogAlbumComponent
  ],
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {
  store = inject(Store);
  albums$ = this.store.select(selectArtistsAlbum);
  dialog = inject(MatDialog);
  favorites = inject(Favorites);

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAlbumComponent, {
      data: {
        editMode: false
      },
      maxWidth: '600px',
      width: '100%'
    });

    dialogRef.afterClosed().subscribe((data) => {
      this.store.dispatch(
        artistsActions.artistsAddAlbum({
          artistName: data.name,
          album: data
        })
      );
    });
  }

  ngOnInit(): void {
    this.store.select(selectArtists).subscribe((data) => {
      if (data.length <= 0) {
        this.store.dispatch(artistsActions.artistsLoad());
      }
    });
  }
}
