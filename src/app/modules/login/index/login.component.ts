import { LoginPost } from './../../../services/login/interfaces/login.model';
import { LoginService } from './../../../services/login/login.service';
import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logindisplay: string ='none';
  loginValue: LoginPost = {
    AccountName: '',
    Password: ''
  }
  constructor(private router:Router,private loginService:LoginService){}
  ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  }
  login(){
    this.loginService.JWTLogin(this.loginValue).subscribe((data: any) => {
      console.log(data);
    })
    //this.router.navigateByUrl('');
  }
  closeForm(){
    this.logindisplay = 'none';
  }
  openForm(){
    this.logindisplay = 'flex';
  }
}
