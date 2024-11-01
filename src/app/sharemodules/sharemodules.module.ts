import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WandkinavbarComponent } from './navbar/wandkinavbar/wandkinavbar.component';
import { WandkifooterComponent } from './footer/wandkifooter/wandkifooter.component';
import { RouterModule } from '@angular/router'

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './navbar/login/login.component';






@NgModule({
  declarations:
  [
    WandkinavbarComponent,
    WandkifooterComponent,
    LoginComponent

    // MainpageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule

    ],
  exports: [
    WandkinavbarComponent,
    WandkifooterComponent,
    LoginComponent
    // MainpageComponent

  ]
})
export class SharemodulesModule { }
