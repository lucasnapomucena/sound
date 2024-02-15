import { Component, Input } from '@angular/core';
import { Song } from '../../models/artist';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-songs-list',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './songs-list.component.html',
  styleUrl: './songs-list.component.scss'
})
export class SongsListComponent {
  @Input() song!: Song;
  $active: boolean = false;
}
