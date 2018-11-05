import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PastorderComponent } from './pastorder/pastorder.component';

import { LoginComponent } from './login/login.component';
import { PastorderdetailsComponent } from './pastorderdetails/pastorderdetails.component';
import { SignupComponent } from './signup/signup.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UpdatecusinedishComponent } from './updatecusinedish/updatecusinedish.component';


const arr:Routes=[
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'pastorder',component:PastorderComponent},
  {path:'pastorderdetails/:bill_no',component:PastorderdetailsComponent},
  {path:'signup',component:SignupComponent},
  {path:'Admin',component:AdminhomeComponent},
  {path:'updatecusinedish',component:UpdatecusinedishComponent}

];
export const routing=RouterModule.forRoot(arr);
