import { createAction, props } from '@ngrx/store';
import { Album, Artist, Song } from '../models/artist';

const artistsLoad = createAction('[Artists] Carregar Artistas');

const artistsLoadWithSuccess = createAction(
  '[Artists] Artistas Carregados Sucesso',
  props<{ artists: Artist[] }>()
);

const artistsAddFavoriteAlbum = createAction(
  '[Favorites] Add Album',
  props<{ album: Album }>()
);

const artistsRemoveFavoriteAlbum = createAction(
  '[Favorites] Remove Album',
  props<{ albumName: string }>()
);

const artistsAddFavoriteSong = createAction(
  '[Favorites] Add Song',
  props<{ song: Song }>()
);

const artistsRemoveFavoriteSong = createAction(
  '[Favorites] Remove Song',
  props<{ songName: string }>()
);

export const artistsActions = {
  artistsLoad,
  artistsLoadWithSuccess,
  artistsAddFavoriteAlbum,
  artistsRemoveFavoriteAlbum,
  artistsAddFavoriteSong,
  artistsRemoveFavoriteSong
};
