import { createReducer, on } from '@ngrx/store';
import { artistsActions } from './actions';
import { initialState, initialFavoriteState, IAppState } from './states';
import { ActionReducerMap } from '@ngrx/store';
import { ArtistStatus } from './states';

export const artistsReducer = createReducer(
  initialState,
  on(artistsActions.artistsLoad, (state) => {
    return {
      ...state,
      status: ArtistStatus.loading
    };
  }),
  on(artistsActions.artistsLoadWithSuccess, (state, artistObj) => {
    return {
      ...state,
      artists: artistObj.artists,
      status: ArtistStatus.success
    };
  }),
  on(artistsActions.artistsAddAlbum, (state, albumtObj) => {
    return {
      ...state,
      artists: state.artists.map((artist) => {
        if (artist.name === albumtObj.artistName) {
          return {
            ...artist,
            albums: [...artist.albums, albumtObj.album]
          };
        }
        return artist;
      })
    };
  }),
  on(artistsActions.artistsEditAlbum, (state, albumtObj) => {
    return {
      ...state,
      artists: state.artists.map((artist) => {
        if (artist.name === albumtObj.artistName) {
          return {
            ...artist,
            albums: artist.albums.map((album) => {
              if (album.title === albumtObj.album.title) {
                return {
                  ...album,
                  ...albumtObj.album
                };
              }
              return album;
            })
          };
        }
        return artist;
      })
    };
  })
);

export const favoritesReducer = createReducer(
  initialFavoriteState,
  on(artistsActions.artistsAddFavoriteAlbum, (state, albumObj) => {
    return {
      ...state,
      album: [...state.album, albumObj.album]
    };
  }),

  on(artistsActions.artistsRemoveFavoriteAlbum, (state, albumName) => {
    return {
      ...state,
      album: state.album.filter((album) => album.title !== albumName.albumName)
    };
  }),
  on(artistsActions.artistsAddFavoriteSong, (state, songObj) => {
    return {
      ...state,
      song: [...state.song, songObj.song]
    };
  }),

  on(artistsActions.artistsRemoveFavoriteSong, (state, songName) => {
    return {
      ...state,
      song: state.song.filter((song) => song.title !== songName.songName)
    };
  })
);

export const appReducers: ActionReducerMap<IAppState> = {
  artists: artistsReducer,
  favorites: favoritesReducer
};
