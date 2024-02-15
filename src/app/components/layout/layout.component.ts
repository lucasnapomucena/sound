import { Component } from '@angular/core';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { SongsListComponent } from '../songs-list/songs-list.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, SongsListComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {}
