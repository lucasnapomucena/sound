import { createAction, props } from '@ngrx/store';

const addFavoriteAlbum = createAction(
  '[Favorites] Add Album',
  props<{ albumName: string }>()
);

const addFavoriteSong = createAction(
  '[Favorites] Add Song',
  props<{ songName: string }>()
);

export { addFavoriteAlbum, addFavoriteSong };
