import { createSelector } from '@ngrx/store';
import { IAppState } from './states';

export const selectArtists = (state: IAppState) => state.artists.artists;

export const selectFavorites = (state: IAppState) => state.favorites;

export const selectArtistsAlbum = createSelector(selectArtists, (state) =>
  state.flatMap((artist) => artist.albums)
);

export const selectArtistsSongs = (albumName: string) =>
  createSelector(selectArtistsAlbum, (state) =>
    state.find((album) => album.title === albumName)
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
