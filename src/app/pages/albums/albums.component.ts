import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { Album } from '../../models/artist';
import { map } from 'rxjs';
import { AlbumListComponent } from '../../components/cards/album-list/album-list.component';
import { addFavoriteAlbum } from '../../store/favorites/actions/favorites.actions';
import { Store } from '@ngrx/store';
import { FavoritesState } from '../../store/favorites';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [AlbumListComponent],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(
    private artistsService: ArtistService,
    private store: Store<FavoritesState>
  ) {}

  onAddToFavoritesAlbum(albumName: string) {
    this.store.dispatch(addFavoriteAlbum({ albumName }));
  }

  ngOnInit(): void {
    this.artistsService
      .getArtists()
      .pipe(map((artists) => artists.map((artist) => artist.albums)))
      .pipe(map((albums) => albums.flat()))
      .subscribe((albums) => (this.albums = albums));
  }
}
