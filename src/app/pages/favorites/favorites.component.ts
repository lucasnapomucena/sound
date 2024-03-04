import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectFavoritesAlbum,
  selectFavoritesSongs,
  selectIsAlbumFavorite,
  selectIsSongFavorite
} from '@store/selectors';
import { artistsActions } from '@store/actions';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { AlbumListComponent } from '@components/cards/album-list/album-list.component';

import { SongsListComponent } from '@components/cards/songs-list/songs-list.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatDividerModule,
    SongsListComponent,
    AlbumListComponent
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent implements OnInit {
  store = inject(Store);
  albums$ = this.store.select(selectFavoritesAlbum);
  songs$ = this.store.select(selectFavoritesSongs);

  onRemoveToFavoritesAlbum(id: string) {
    this.store.dispatch(artistsActions.artistsRemoveFavoriteAlbum({ id }));
  }

  onRemoveToFavoritesSong(id: string) {
    this.store.dispatch(artistsActions.artistsRemoveFavoriteSong({ id }));
  }

  isFavoriteAlbum(id: string) {
    return this.store.select(selectIsAlbumFavorite(id));
  }

  isFavoriteSong(id: string) {
    return this.store.select(selectIsSongFavorite(id));
  }

  ngOnInit(): void {
    this.store.dispatch(artistsActions.artistsLoad());
  }
}
