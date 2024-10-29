import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WandkinavbarComponent } from './sharemodules/navbar/wandkinavbar/wandkinavbar.component';
import { WandkifooterComponent } from './sharemodules/footer/wandkifooter/wandkifooter.component';
import { HelpingComponent } from './modules/template/pages/helping/helping.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { share } from 'rxjs';
import { SharemodulesModule } from './sharemodules/sharemodules.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharemodulesModule,
    NgbModule

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
