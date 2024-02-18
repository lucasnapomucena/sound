import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectFavoritesTotal } from '../../store/selectors';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  store = inject(Store);
  favoriteTotal$ = this.store.select(selectFavoritesTotal);
}
