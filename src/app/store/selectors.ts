import { createSelector } from '@ngrx/store';

import { Artist } from '../models/artist';
import { IAppState } from './states';

export const selectArtists = (state: IAppState): Artist[] =>
  state.artists.artists;

export const selectFavorites = (state: IAppState) => state.favorites;

export const selectArtistsAlbum = createSelector(selectArtists, (state) =>
  state.flatMap((artist) => artist.albums)
);

export const selectArtistsList = createSelector(selectArtists, (state) =>
  state.map((artist) => artist.name)
);

export const selectArtistsSongs = (id: string) =>
  createSelector(selectArtistsAlbum, (state) =>
    state.find((album) => album.id === id)
  );

export const selectArtistByAlbumId = (id: string) =>
  createSelector(selectArtists, (state) => {
    for (const artist of state) {
      if (artist.albums.some((album) => album.id === id)) {
        return artist;
      }
    }
    return undefined;
  });

export const selectFavoritesAlbum = createSelector(
  selectFavorites,
  (state) => state.album
);

export const selectFavoritesSongs = createSelector(
  selectFavorites,
  (state) => state.song
);

export const selectFavoritesTotal = createSelector(
  selectFavorites,
  (state) => state.album.length + state.song.length
);

export const selectIsAlbumFavorite = (id: string) =>
  createSelector(selectFavorites, (state) =>
    state.album.some((album) => album.id === id)
  );

export const selectIsSongFavorite = (id: string) =>
  createSelector(selectFavorites, (state) =>
    state.song.some((song) => song.id === id)
  );
