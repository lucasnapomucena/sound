import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from '@models/artist';

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
