import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Album } from '@models/artist';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.scss'
})
export class AlbumListComponent {
  store = inject(Store);
  @Input() album!: Album;
  @Input({ required: false }) addToFavorites!: (album: Album) => void;
  @Input() removeToFavorites!: (albumName: string) => void;
  @Input() isFavorite!: (albumName: string) => Observable<boolean>;
}
