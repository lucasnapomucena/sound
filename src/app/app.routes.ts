import { Routes } from '@angular/router';
import { AlbumsComponent } from './pages/albums/albums.component';
import { SongsComponent } from './pages/albums/songs/songs.component';

export const routes: Routes = [
  { path: '', component: AlbumsComponent },
  { path: 'albums/:name', component: SongsComponent },
  { path: 'favorites', component: SongsComponent }
];
