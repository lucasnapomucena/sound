import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectFavoritesTotal } from '../../store/selectors';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatBadgeModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  store = inject(Store);
  favoriteTotal$ = this.store.select(selectFavoritesTotal);
}
