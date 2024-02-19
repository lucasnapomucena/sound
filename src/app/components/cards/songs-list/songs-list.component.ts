import { Component, Input, inject } from '@angular/core';
import { Song } from '../../../models/artist';
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
  @Input() song!: Song;
  @Input() addToFavorites!: (song: Song) => void;
  @Input() removeToFavorites!: (songName: string) => void;
  @Input() isFavorite!: (songName: string) => Observable<boolean>;
}
