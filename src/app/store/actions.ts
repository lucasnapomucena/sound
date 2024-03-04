import { createAction, props } from '@ngrx/store';
import { Album, Artist, Song } from '@models/artist';

const artistsLoad = createAction('[Artists] Load Artists');

const artistsLoadWithSuccess = createAction(
  '[Artists] Loaded Artists Success',
  props<{ artists: Artist[] }>()
);

const artistsAddAlbum = createAction(
  '[Artists] Add Album',
  props<{ artistName: string; album: Album }>()
);

const artistsEditAlbum = createAction(
  '[Artists] Edit Album',
  props<{ artistName: string; album: Album }>()
);

const artistsAddFavoriteAlbum = createAction(
  '[Favorites] Add Album',
  props<{ album: Album }>()
);

const artistsRemoveFavoriteAlbum = createAction(
  '[Favorites] Remove Album',
  props<{ id: string }>()
);

const artistsAddFavoriteSong = createAction(
  '[Favorites] Add Song',
  props<{ song: Song }>()
);

const artistsRemoveFavoriteSong = createAction(
  '[Favorites] Remove Song',
  props<{ id: string }>()
);

export const artistsActions = {
  artistsLoad,
  artistsLoadWithSuccess,
  artistsAddAlbum,
  artistsEditAlbum,
  artistsAddFavoriteAlbum,
  artistsRemoveFavoriteAlbum,
  artistsAddFavoriteSong,
  artistsRemoveFavoriteSong
};
