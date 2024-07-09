import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports:      [ BrowserModule,CommonModule, FormsModule ,ReactiveFormsModule ],
  declarations: [ AppComponent,LoginComponent,SignupComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }