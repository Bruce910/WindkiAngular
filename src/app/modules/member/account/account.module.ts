import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCenterComponent } from './index/account-center.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: AccountCenterComponent },
];

@NgModule({
  declarations: [
    AccountCenterComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule, AccountCenterComponent],
  providers: []
})
export class AccountModule { }
