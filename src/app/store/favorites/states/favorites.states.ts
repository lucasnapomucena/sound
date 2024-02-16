import { AlbumFavorite, SongFavorite } from '../../../models/favorites';

export interface FavoritesState {
  albums: AlbumFavorite[];
  songs: SongFavorite[];
}

export const initialState: FavoritesState = {
  albums: [],
  songs: []
};
