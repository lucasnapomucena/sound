import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Album } from '../../models/artist';
import { AlbumListComponent } from '../../components/cards/album-list/album-list.component';
import { artistsActions } from '../../store/actions';
import { Store } from '@ngrx/store';
import {
  selectArtistsAlbum,
  selectIsAlbumFavorite
} from '../../store/selectors';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlbumListComponent],
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {
  store = inject(Store);
  albums$ = this.store.select(selectArtistsAlbum);

  onAddToFavoritesAlbum(album: Album) {
    this.store.dispatch(artistsActions.artistsAddFavoriteAlbum({ album }));
  }

  onRemoveToFavoritesAlbum(albumName: string) {
    this.store.dispatch(
      artistsActions.artistsRemoveFavoriteAlbum({ albumName })
    );
  }

  isFavorite(albumName: string) {
    return this.store.select(selectIsAlbumFavorite(albumName));
  }

  ngOnInit(): void {
    this.store.dispatch(artistsActions.artistsLoad());
  }
}
