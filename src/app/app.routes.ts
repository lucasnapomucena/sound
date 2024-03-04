import { Routes } from '@angular/router';
import { AlbumsComponent } from '@pages/albums/albums.component';
import { SongsComponent } from '@pages/albums/songs/songs.component';
import { FavoritesComponent } from '@pages/favorites/favorites.component';

export const routes: Routes = [
  { path: '', component: AlbumsComponent },
  { path: 'albums/:id', component: SongsComponent },
  { path: 'favorites', component: FavoritesComponent }
];
