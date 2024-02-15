import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  LucideAngularModule,
  Home,
  HeartIcon,
  Search,
  Bell,
  Play,
  DiscAlbum
} from 'lucide-angular';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './components/layout/layout.component';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    LucideAngularModule.pick({
      Home,
      HeartIcon,
      Search,
      Bell,
      Play,
      DiscAlbum
    }),
    LayoutComponent,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}, {}),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
