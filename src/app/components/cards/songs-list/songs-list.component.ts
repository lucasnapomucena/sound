import { Component, Input, inject } from '@angular/core';
import { Song } from '../../../models/artist';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

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
  @Input() removeToFavorites!: (songName: string) => void;
  @Input() isFavorite!: (songName: string) => Observable<boolean>;
}
