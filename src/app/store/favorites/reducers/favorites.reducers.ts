import { createReducer, on } from '@ngrx/store';
import {
  addFavoriteAlbum,
  addFavoriteSong
} from './../actions/favorites.actions';
import { initialState } from '../states/favorites.states';

export const favoritesReducer = createReducer(
  initialState,
  // eslint-disable-next-line @ngrx/on-function-explicit-return-type
  on(addFavoriteAlbum, (state, action) => ({
    ...state,
    albums: [
      ...state.albums.filter((album) => album.albumName !== action.albumName),
      { albumName: action.albumName, favorite: true }
    ]
  })),
  on(addFavoriteSong, (state, action) => ({
    ...state,
    songs: [
      ...state.songs.filter((song) => song.songName !== action.songName),
      { songName: action.songName, favorite: true }
    ]
  }))
);
