import { createAction, props } from '@ngrx/store';
import { SongFavorite } from '../../../models/favorites';

const addFavoriteAlbum = createAction(
  '[Favorites] Add Album',
  props<{ albumName: string }>()
);

const addFavoriteSong = createAction(
  '[Favorites] Add Song',
  props<{ song: SongFavorite }>()
);

export { addFavoriteAlbum, addFavoriteSong };
