import { Component } from '@angular/core';
import { SidebarComponent } from '@components/sidebar/sidebar.component';
import { HeaderComponent } from '@components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatSidenavModule, SidebarComponent, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {}
