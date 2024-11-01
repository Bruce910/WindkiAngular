import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WandkinavbarComponent } from './navbar/wandkinavbar/wandkinavbar.component';
import { WandkifooterComponent } from './footer/wandkifooter/wandkifooter.component';
import { RouterModule } from '@angular/router'
import { LoginModule } from '../modules/login/login.module';



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
    LoginModule
    ],
  exports: [
    WandkinavbarComponent,
    WandkifooterComponent,
    // MainpageComponent

  ]
})
export class SharemodulesModule { }
