import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninFormComponent } from './signin-screen/signin-form/signin-form.component';
import { SigninScreenComponent } from './signin-screen/signin-screen.component';
import { SignupFormComponent } from './signin-screen/signup-form/signup-form.component';

const routes: Routes = [
    {
    path: '',
    component: SigninScreenComponent,
    children: [
      {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
      },
      {
        path: 'signin',
        component: SigninFormComponent
      },
      {
        path: 'signup',
        component: SignupFormComponent
      }
    ]
  },
  {
    path:'**',
    redirectTo:'signin',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
