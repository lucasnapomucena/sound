import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectFavoritesTotal } from '../../store/selectors';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  store = inject(Store);
  favoriteTotal$ = this.store.select(selectFavoritesTotal);
}
