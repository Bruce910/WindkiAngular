import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WandkinavbarComponent } from './navbar/wandkinavbar/wandkinavbar.component';
import { WandkifooterComponent } from './footer/wandkifooter/wandkifooter.component';
import { RouterModule } from '@angular/router'
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from '../modules/login/index/login.component';



@NgModule({
  declarations:
  [
    WandkinavbarComponent,
    WandkifooterComponent,
    // MainpageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoginComponent


  ],
  exports: [
    WandkinavbarComponent,
    WandkifooterComponent,
    // MainpageComponent

  ]
})
export class SharemodulesModule { }
