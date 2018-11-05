import { Injectable } from '@angular/core';
import { login } from './login/login_class';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Signup } from './signup/signup_class';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private login_url='http://localhost:3000/login/';
  private signup_url='http://localhost:3000/signup/';
  constructor(private _http:HttpClient) { }
  getLoginById(item:login){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.login_url+item.user_id, body, {headers: head1});
  }
  addUser(item:Signup) {
    const body = JSON.stringify(item);
    const head1 = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.signup_url, body, {headers: head1});
  }
}
