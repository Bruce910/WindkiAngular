import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
logindisplay: string ='flex';
  closeForm(){
    this.logindisplay = 'none';
  }
  openForm(){
    this.logindisplay = 'flex';
  }
}
