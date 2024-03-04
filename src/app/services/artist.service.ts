import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Artist } from '@models/artist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private jsonFilePath = 'assets/artists_albuns.json'; // replace with your json file path

  http = inject(HttpClient);

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.jsonFilePath);
  }
}
