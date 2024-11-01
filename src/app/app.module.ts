import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WandkinavbarComponent } from './sharemodules/navbar/wandkinavbar/wandkinavbar.component';
import { WandkifooterComponent } from './sharemodules/footer/wandkifooter/wandkifooter.component';
import { HelpingComponent } from './modules/template/pages/helping/helping.component';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { share } from 'rxjs';
import { SharemodulesModule } from './sharemodules/sharemodules.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './modules/login/index/login.component';

@NgModule({
  declarations: [
    AppComponent,
    // WandkinavbarComponent,WandkifooterComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharemodulesModule,
    HttpClientModule,
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
