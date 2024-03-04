import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Album } from '@models/artist';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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
  @Input() removeToFavorites!: (id: string) => void;
  @Input() isFavorite!: (id: string) => Observable<boolean>;
}
