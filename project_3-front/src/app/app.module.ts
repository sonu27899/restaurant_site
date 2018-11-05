import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PastorderComponent } from './pastorder/pastorder.component'

import { LoginComponent } from './login/login.component';
import { MatButtonModule,MatSidenavModule,MatInputModule,MatSelectModule,MatTableModule,MatFormFieldModule,MatPaginatorModule,MatIconModule} from '@angular/material'
import { PastorderdetailsComponent } from './pastorderdetails/pastorderdetails.component';
import { SignupComponent } from './signup/signup.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UpdatecusinedishComponent } from './updatecusinedish/updatecusinedish.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PastorderComponent,
    LoginComponent,
    PastorderComponent,
    PastorderdetailsComponent,
    SignupComponent,
    AdminhomeComponent,
    UpdatecusinedishComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    routing,
    MatButtonModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
