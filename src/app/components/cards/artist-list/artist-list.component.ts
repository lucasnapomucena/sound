import { Component, Input } from '@angular/core';
import { Artist } from '../../../models/artist';

@Component({
  selector: 'app-artist-list',
  standalone: true,
  imports: [],
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.scss'
})
export class ArtistListComponent {
  @Input() artist!: Artist;
}
