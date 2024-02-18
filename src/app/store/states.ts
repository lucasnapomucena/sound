import { Album, Artist, Song } from '../models/artist';

export enum ArtistStatus {
  loading = 'loading',
  pending = 'pending',
  error = 'error',
  success = 'success'
}

export interface ArtistState {
  artists: Artist[];
  error: '' | null;
  status: ArtistStatus;
}

export interface FavoriteState {
  album: Album[];
  song: Song[];
}

export const initialState: ArtistState = {
  error: null,
  status: ArtistStatus.pending,
  artists: []
};

export const initialFavoriteState: FavoriteState = {
  album: [],
  song: []
};

export interface IAppState {
  artists: ArtistState;
  favorites: FavoriteState;
}
