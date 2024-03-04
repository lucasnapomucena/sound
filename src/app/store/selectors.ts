import { createSelector } from '@ngrx/store';
import { IAppState } from './states';
import { Artist } from '../models/artist';

export const selectArtists = (state: IAppState): Artist[] =>
  state.artists.artists;

export const selectFavorites = (state: IAppState) => state.favorites;

export const selectArtistsAlbum = createSelector(selectArtists, (state) =>
  state.flatMap((artist) => artist.albums)
);

export const selectArtistsList = createSelector(selectArtists, (state) =>
  state.map((artist) => artist.name)
);

export const selectArtistsName = (artistName: string) =>
  createSelector(selectArtists, (state) =>
    state.filter((artist) => artist.name === artistName)
  );

export const selectArtistsSongs = (albumName: string) =>
  createSelector(selectArtistsAlbum, (state) =>
    state.find((album) => album.title === albumName)
  );

export const selectArtistByAlbumName = (albumName: string) =>
  createSelector(selectArtists, (state) => {
    for (const artist of state) {
      if (artist.albums.some((album) => album.title === albumName)) {
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

export const selectIsAlbumFavorite = (albumName: string) =>
  createSelector(selectFavorites, (state) =>
    state.album.some((album) => album.title === albumName)
  );

export const selectIsSongFavorite = (songName: string) =>
  createSelector(selectFavorites, (state) =>
    state.song.some((song) => song.title === songName)
  );
