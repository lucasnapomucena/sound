import { Component, Input } from '@angular/core';
import { Artist } from '../../../models/artist';
import { LucideAngularModule } from 'lucide-angular';
@Component({
  selector: 'app-artist-list',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.scss'
})
export class ArtistListComponent {
  @Input() artist!: Artist;
}
