import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Song } from '@models/artist';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-songs-list',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './songs-list.component.html'
})
export class SongsListComponent {
  store = inject(Store);
  @Input() song!: Song;
  @Input() addToFavorites!: (song: Song) => void;
  @Input() removeToFavorites!: (id: string) => void;
  @Input() isFavorite!: (id: string) => Observable<boolean>;
}
