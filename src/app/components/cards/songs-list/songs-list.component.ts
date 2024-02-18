import { Component, Input, inject } from '@angular/core';
import { Album, Song } from '../../../models/artist';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-songs-list',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './songs-list.component.html'
})
export class SongsListComponent {
  store = inject(Store);
  @Input() album!: Album;
  @Input() addToFavorites!: (song: Song) => void;
  @Input() removeToFavorites!: (songName: string) => void;
  @Input() isFavorite!: (songName: string) => Observable<boolean>;
}
