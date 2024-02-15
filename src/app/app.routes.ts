import { Routes } from '@angular/router';
import { ArtistsComponent } from './pages/artists/artists.component';
import { AlbumsComponent } from './pages/albums/albums.component';

export const routes: Routes = [
  { path: '', component: ArtistsComponent },
  { path: 'albums', component: AlbumsComponent }
];
