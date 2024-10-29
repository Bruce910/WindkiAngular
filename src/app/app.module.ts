import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WandkinavbarComponent } from './sharemodules/navbar/wandkinavbar/wandkinavbar.component';
import { WandkifooterComponent } from './sharemodules/footer/wandkifooter/wandkifooter.component';
import { HelpingComponent } from './modules/template/pages/helping/helping.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { share } from 'rxjs';
import { SharemodulesModule } from './sharemodules/sharemodules.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharemodulesModule,
    HttpClientModule,
    CarouselModule

  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
