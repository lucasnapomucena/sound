import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { AlbumListComponent } from '@components/cards/album-list/album-list.component';
import { SongsListComponent } from '@components/cards/songs-list/songs-list.component';
import { Store } from '@ngrx/store';
import { Favorites } from '@shared/helpers/favorites';
import { artistsActions } from '@store/actions';
import {
  selectArtists,
  selectFavoritesAlbum,
  selectFavoritesSongs
} from '@store/selectors';

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
  favorites = inject(Favorites);

  ngOnInit(): void {
    this.store.select(selectArtists).subscribe((data) => {
      if (data.length <= 0) {
        this.store.dispatch(artistsActions.artistsLoad());
      }
    });
  }
}
