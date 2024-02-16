import { Component, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { selectFavoritesTotal } from '../../store/favorites/selectors/favorites.selectors';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  favoriteTotal$!: Observable<number>;
  favoriteTotal!: number;

  constructor(private store: Store<any>) {
    this.favoriteTotal$ = this.store.select(selectFavoritesTotal);
  }

  ngOnInit(): void {
    this.favoriteTotal$.subscribe((total) => (this.favoriteTotal = total));
  }
}
