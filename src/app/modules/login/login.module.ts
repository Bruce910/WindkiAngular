import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './index/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
