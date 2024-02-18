import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Album } from '../../../models/artist';
import { LucideAngularModule } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterModule],
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.scss'
})
export class AlbumListComponent {
  store = inject(Store);
  @Input() album!: Album;
  @Input() addToFavorites!: (album: Album) => void;
  @Input() removeToFavorites!: (albumName: string) => void;
  @Input() isFavorite!: (albumName: string) => Observable<boolean>;
}
