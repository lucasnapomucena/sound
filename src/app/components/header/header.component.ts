import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject
} from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  selectArtistsAlbum,
  selectFavoritesTotal,
  selectFilterAlbumName
} from '@store/selectors';
import { AsyncPipe } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatBadgeModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  store = inject(Store);
  favoriteTotal$ = this.store.select(selectFavoritesTotal);
  albums$ = this.store.select(selectArtistsAlbum);
  searchControl = new FormControl();

  @Output() toggle = new EventEmitter<void>();
  @Input() isSidenavOpened!: boolean;

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(debounceTime(400))
      .subscribe((value) => {
        this.albums$ = this.store.select(selectFilterAlbumName(value));
      });
  }

  onToggle() {
    this.toggle.emit();
  }
}
