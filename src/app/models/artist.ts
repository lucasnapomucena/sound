export interface Artist {
  id: string;
  name: string;
  image: string;
  albums: Album[];
}
export interface Album {
  id: string;
  title: string;
  images: string;
  songs: Song[];
  description: string;
}
export interface Song {
  id: string;
  title: string;
  duration: string;
}
