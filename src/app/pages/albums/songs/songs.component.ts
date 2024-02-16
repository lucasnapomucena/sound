import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../../../models/artist';
import { ArtistService } from '../../../services/artist.service';
import { map, switchMap } from 'rxjs';
import { SongsListComponent } from '../../../components/cards/songs-list/songs-list.component';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [SongsListComponent, LucideAngularModule],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.scss'
})
export class SongsComponent implements OnInit {
  $album: Album | null = null;
  totalLength: string = '0';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private artistsService: ArtistService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          const name = params['name'];
          return this.artistsService.getArtists().pipe(
            map((artists) => {
              const allAlbums = artists.flatMap((artist) => artist.albums);

              const album = allAlbums.find((album) => album.title === name);

              const totalLength = album
                ? album.songs.reduce((acc, song) => {
                    return acc + parseFloat(song['length'].replace(':', '.'));
                  }, 0)
                : 0;
              return { album, totalLength };
            })
          );
        })
      )
      .subscribe(({ album, totalLength }) => {
        this.$album = album || null;
        this.totalLength = totalLength.toFixed(2).toString().replace('.', ':');
      });
  }
}
