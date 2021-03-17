import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninScreenComponent } from './signin-screen/signin-screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninModule } from './signin-screen/signin-screen.module';
import { SliderComponent } from './slider/slider.component';




@NgModule({
  declarations: [
    AppComponent,
    SigninScreenComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SigninModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
