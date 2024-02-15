import { Routes } from '@angular/router';
import { ArtistsComponent } from './pages/artists/artists.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { SongsComponent } from './pages/albums/songs/songs.component';

export const routes: Routes = [
  { path: '', component: ArtistsComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:name', component: SongsComponent }
];
