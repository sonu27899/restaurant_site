import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login } from './login_class';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user_id:string;
  user_password:string;
  constructor(private _route:Router,private _xyz:LoginService) { }

  ngOnInit() {
  }

  onLogin(){
    localStorage.setItem('id',this.user_id);
    console.log(this.user_id);
    console.log(this.user_password);
    this._xyz.getLoginById(new login(this.user_id,this.user_password)).subscribe(
      (data:login[])=>{
        console.log(data);

        if(data.length==1){
          localStorage.setItem('id',this.user_id);
          alert("Login Successfully");
          this._route.navigate(['home']);
        }
        else{
          alert("Email Or Password Incorrect");
        }
      }
    )
  }



}
