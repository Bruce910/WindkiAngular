import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WandkinavbarComponent } from './navbar/wandkinavbar/wandkinavbar.component';
import { WandkifooterComponent } from './footer/wandkifooter/wandkifooter.component';
import { RouterModule } from '@angular/router'



@NgModule({
  declarations: [WandkinavbarComponent,WandkifooterComponent],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    WandkinavbarComponent,
    WandkifooterComponent
  ]
})
export class SharemodulesModule { }
