import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArtistService } from '@services/artist.service';
import { map, switchMap } from 'rxjs';

import { artistsActions } from './actions';

@Injectable()
export class ArtistsEffect {
  actions$ = inject(Actions);
  artistService = inject(ArtistService);

  loadArtists$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(artistsActions.artistsLoad),
      switchMap(() =>
        this.artistService
          .getArtists()
          .pipe(
            map((artists) => artistsActions.artistsLoadWithSuccess({ artists }))
          )
      )
    );
  });
}
