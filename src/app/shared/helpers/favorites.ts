import { Injectable, inject } from '@angular/core';
import { Album, Song } from '@models/artist';
import { Store } from '@ngrx/store';
import { artistsActions } from '@store/actions';
import { selectIsAlbumFavorite, selectIsSongFavorite } from '@store/selectors';

@Injectable({
  providedIn: 'root'
})
export class Favorites {
  store = inject(Store);

  onAddToFavoritesAlbum(album: Album) {
    this.store.dispatch(artistsActions.artistsAddFavoriteAlbum({ album }));
  }

  onRemoveToFavoritesAlbum(id: string) {
    this.store.dispatch(artistsActions.artistsRemoveFavoriteAlbum({ id }));
  }

  onAddSongToFavorites(song: Song) {
    this.store.dispatch(artistsActions.artistsAddFavoriteSong({ song }));
  }

  onRemoveSongToFavorites(id: string) {
    this.store.dispatch(artistsActions.artistsRemoveFavoriteSong({ id }));
  }

  isFavoriteSong(id: string) {
    return this.store.select(selectIsSongFavorite(id));
  }

  isFavoriteAlbum(id: string) {
    return this.store.select(selectIsAlbumFavorite(id));
  }
}
