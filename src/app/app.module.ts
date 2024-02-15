import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LucideAngularModule, Home, HeartIcon } from 'lucide-angular';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LucideAngularModule.pick({ Home, HeartIcon }),
    LayoutComponent,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
