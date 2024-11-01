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
    // const form = document.getElementById("myForm");
    // if (form) {
    //   form.style.display = "none";
    // }
  }
  openForm(){
    alert('openForm');
    this.logindisplay = 'flex';
    // const form = document.getElementById("myForm");
    // if (form) {
    //   form.style.display = "flex";
    // }
  }
}
