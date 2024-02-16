import { createSelector } from '@ngrx/store';
import { FavoritesState } from '../states/favorites.states';

interface FavoriteState {
  favorites: FavoritesState;
}

export const selectFavorites = (state: FavoriteState) => state.favorites;

export const selectFavoritesTotal = createSelector(
  selectFavorites,
  (state) => state.albums.length + state.songs.length
);
