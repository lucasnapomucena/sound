import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectFavoritesTotal } from '../../store/selectors';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatBadgeModule,
    MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  store = inject(Store);
  favoriteTotal$ = this.store.select(selectFavoritesTotal);
  favoriteTotal = 0;

  ngOnInit(): void {
    this.favoriteTotal$.subscribe((total) => {
      this.favoriteTotal = total;
    });
  }
}
