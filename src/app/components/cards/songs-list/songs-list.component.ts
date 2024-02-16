import { Component, Input } from '@angular/core';
import { Album } from '../../../models/artist';
import { LucideAngularModule } from 'lucide-angular';
import { FavoritesState } from '../../../store/favorites';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-songs-list',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './songs-list.component.html',
  styleUrl: './songs-list.component.scss'
})
export class SongsListComponent {
  @Input() album!: Album;
  @Input() addToFavorites!: (songName: string) => void;

  constructor(private store: Store<FavoritesState>) {}
}
