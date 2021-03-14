import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninScreenComponent } from './signin-screen/signin-screen.component';
import { SignupScreenComponent } from './signup-screen/signup-screen.component';
import { SliderComponent } from './slider/slider.component';
import { SignupFormComponent } from './signup-screen/signup-form/signup-form.component';
import { SigninFormComponent } from './signin-screen/signin-form/signin-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SigninScreenComponent,
    SignupScreenComponent,
    SliderComponent,
    SignupFormComponent,
    SigninFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
