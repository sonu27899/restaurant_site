import { Component, OnInit } from '@angular/core';
import { Signup } from '../signup/signup_class';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  arr:Signup[]=[];
  user_email:string;
  user_password:string;
  Mobile:string;
  City:string;
  Gender:string="Male";
  Address:string;
  constructor(private _route:Router,private _xyz:LoginService) { }

  onAdd(){
    this._xyz.addUser(new Signup(this.user_email,this.user_password,this.Mobile,this.City,this.Gender,this.Address)).subscribe(
    (data:any)=>{
      console.log(data);
      this.arr.push(new Signup(this.user_email,this.user_password,this.Mobile,this.City,this.Gender,this.Address));
    }
    );
    this._route.navigate(['/']);

  }

  onCancel(){
    this._route.navigate([''])
  }

  ngOnInit() {
  }

}
