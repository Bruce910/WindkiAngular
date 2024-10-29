import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WandkinavbarComponent } from './navbar/wandkinavbar/wandkinavbar.component';
import { WandkifooterComponent } from './footer/wandkifooter/wandkifooter.component';
import { RouterModule } from '@angular/router'
import { MainpageComponent } from './mainpage/mainpage.component';



@NgModule({
  declarations:
  [
    // WandkinavbarComponent,
    // WandkifooterComponent,
    // MainpageComponent
  ],
  imports: [
    CommonModule,
    RouterModule


  ],
  exports: [
    // WandkinavbarComponent,
    // WandkifooterComponent,
    // MainpageComponent

  ]
})
export class SharemodulesModule { }
