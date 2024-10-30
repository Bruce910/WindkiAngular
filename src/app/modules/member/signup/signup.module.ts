import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './index/signup.component';
import { SharemodulesModule } from "..//../../sharemodules/sharemodules.module";
import { PersonsignupComponent } from './personsignup/personsignup.component';

const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'personsignup', component: PersonsignupComponent}
];
@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharemodulesModule
],
exports: [RouterModule, SignupComponent],
providers: []
})
export class SignupModule { }
