import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { SliderComponent } from '../slider/slider.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    SignupFormComponent,
    SigninFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    SignupFormComponent,
    SigninFormComponent,
  ]
})
export class SigninModule { }
