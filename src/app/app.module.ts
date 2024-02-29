import { NgModule, isDevMode } from '@angular/core';
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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store/reducers';
import { ArtistsEffect } from './store/effects';
import { EffectsModule } from '@ngrx/effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

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
    RouterModule.forRoot(routes),
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([ArtistsEffect]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: isDevMode()
    }),
    LayoutComponent
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule {}
