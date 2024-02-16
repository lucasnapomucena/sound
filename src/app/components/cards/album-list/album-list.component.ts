import { Component, Input } from '@angular/core';
import { Album } from '../../../models/artist';
import { LucideAngularModule } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [LucideAngularModule, RouterModule],
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.scss'
})
export class AlbumListComponent {
  @Input() album!: Album;
  @Input() addToFavorites!: (albumName: string) => void;

  constructor(private store: Store) {}
}
