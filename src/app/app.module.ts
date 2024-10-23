import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WandkinavbarComponent } from './wandkinavbar/wandkinavbar.component';
import { WandkifooterComponent } from './wandkifooter/wandkifooter.component';

@NgModule({
  declarations: [
    AppComponent,
    WandkinavbarComponent,
    WandkifooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
