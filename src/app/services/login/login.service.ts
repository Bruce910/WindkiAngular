import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPost } from './interfaces/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'https://localhost:44333/api/Account/';
  constructor(private http: HttpClient) { }

  JWTLogin(loginValue: LoginPost) {
    return this.http.post(this.url + '/jwtLogin', loginValue);
  }
}
