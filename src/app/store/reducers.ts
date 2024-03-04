import { ActionReducerMap, createReducer, on } from '@ngrx/store';

import { artistsActions } from './actions';
import {
  ArtistState,
  ArtistStatus,
  FavoriteState,
  IAppState,
  initialFavoriteState,
  initialState
} from './states';

export const artistsReducer = createReducer<ArtistState>(
  initialState,
  on(artistsActions.artistsLoad, (state): ArtistState => {
    return {
      ...state,
      status: ArtistStatus.loading
    };
  }),

  on(artistsActions.artistsLoadWithSuccess, (state, artistObj): ArtistState => {
    return {
      ...state,
      artists: artistObj.artists,
      status: ArtistStatus.success
    };
  }),

  on(artistsActions.artistsAddAlbum, (state, albumtObj): ArtistState => {
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

  on(artistsActions.artistsEditAlbum, (state, albumtObj): ArtistState => {
    return {
      ...state,
      artists: state.artists.map((artist) => {
        if (artist.name === albumtObj.artistName) {
          return {
            ...artist,
            albums: artist.albums.map((album) => {
              if (album.id === albumtObj.album.id) {
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

export const favoritesReducer = createReducer<FavoriteState>(
  initialFavoriteState,
  on(
    artistsActions.artistsAddFavoriteAlbum,
    (state, albumObj): FavoriteState => {
      return {
        ...state,
        album: [...state.album, albumObj.album]
      };
    }
  ),

  on(artistsActions.artistsRemoveFavoriteAlbum, (state, obj): FavoriteState => {
    return {
      ...state,
      album: state.album.filter((album) => album.id !== obj.id)
    };
  }),

  on(artistsActions.artistsAddFavoriteSong, (state, songObj): FavoriteState => {
    return {
      ...state,
      song: [...state.song, songObj.song]
    };
  }),

  on(artistsActions.artistsRemoveFavoriteSong, (state, obj): FavoriteState => {
    return {
      ...state,
      song: state.song.filter((song) => song.id !== obj.id)
    };
  })
);

export const appReducers: ActionReducerMap<IAppState> = {
  artists: artistsReducer,
  favorites: favoritesReducer
};
