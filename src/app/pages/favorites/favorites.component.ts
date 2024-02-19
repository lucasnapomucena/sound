import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectFavoritesAlbum,
  selectFavoritesSongs,
  selectIsAlbumFavorite,
  selectIsSongFavorite
} from '../../store/selectors';
import { artistsActions } from '../../store/actions';
import { AlbumListComponent } from '../../components/cards/album-list/album-list.component';

import { SongsListComponent } from '../../components/cards/songs-list/songs-list.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, SongsListComponent, AlbumListComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent implements OnInit {
  store = inject(Store);
  albums$ = this.store.select(selectFavoritesAlbum);
  songs$ = this.store.select(selectFavoritesSongs);

  onRemoveToFavoritesAlbum(albumName: string) {
    this.store.dispatch(
      artistsActions.artistsRemoveFavoriteAlbum({ albumName })
    );
  }

  onRemoveToFavoritesSong(songName: string) {
    this.store.dispatch(artistsActions.artistsRemoveFavoriteSong({ songName }));
  }

  isFavoriteAlbum(albumName: string) {
    return this.store.select(selectIsAlbumFavorite(albumName));
  }

  isFavoriteSong(songName: string) {
    return this.store.select(selectIsSongFavorite(songName));
  }

  ngOnInit(): void {
    this.store.dispatch(artistsActions.artistsLoad());
  }
}
