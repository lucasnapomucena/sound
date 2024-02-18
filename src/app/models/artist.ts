export interface Artist {
  name: string;
  image: string;
  albums: Album[];
}

export interface Album {
  title: string;
  images: string;
  songs: Song[];
  description: string;
  isFavorite?: boolean;
}

export interface Song {
  title: string;
  length: string;
  isFavorite?: boolean;
}
