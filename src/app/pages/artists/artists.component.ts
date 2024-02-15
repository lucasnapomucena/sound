import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { Artist } from '../../models/artist';
import { ArtistListComponent } from '../../components/cards/artist-list/artist-list.component';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [ArtistListComponent],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.scss'
})
export class ArtistsComponent implements OnInit {
  $artists!: Artist[];

  constructor(private artistsService: ArtistService) {}

  ngOnInit(): void {
    this.artistsService.getArtists().subscribe((data: Artist[]) => {
      this.$artists = data;
    });
  }
}
