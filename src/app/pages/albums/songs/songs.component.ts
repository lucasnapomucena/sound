import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album, Song } from '../../../models/artist';
import { CommonModule } from '@angular/common';
import { map, switchMap } from 'rxjs';
import { SongsListComponent } from '../../../components/cards/songs-list/songs-list.component';
import { LucideAngularModule } from 'lucide-angular';
import { artistsActions } from '../../../store/actions';

import { Store } from '@ngrx/store';
import {
  selectArtistsSongs,
  selectIsSongFavorite
} from '../../../store/selectors';

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [CommonModule, SongsListComponent, LucideAngularModule],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.scss'
})
export class SongsComponent {
  route = inject(ActivatedRoute);
  store = inject(Store);
  router = inject(Router);

  album$ = this.route.params.pipe(
    map((params) => params['name']),
    switchMap((name) => this.store.select(selectArtistsSongs(name)))
  );

  album!: Album;
  minutesTotal: string = '';

  onAddSongToFavorites(song: Song) {
    this.store.dispatch(artistsActions.artistsAddFavoriteSong({ song }));
  }

  onRemoveSongToFavorites(songName: string) {
    this.store.dispatch(artistsActions.artistsRemoveFavoriteSong({ songName }));
  }

  isFavorite(songName: string) {
    return this.store.select(selectIsSongFavorite(songName));
  }

  ngOnInit(): void {
    this.store.dispatch(artistsActions.artistsLoad());
    this.album$.subscribe((album) => {
      if (album) {
        this.album = album;

        const minutesTotal = album.songs.reduce((acc, song) => {
          return acc + parseFloat(song['length']);
        }, 0);

        this.minutesTotal = minutesTotal
          .toFixed(2)
          .toString()
          .replace('.', ':');
      }
    });
  }
}
