import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninScreenComponent } from './signin-screen/signin-screen.component';
import { SignupScreenComponent } from './signup-screen/signup-screen.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninScreenComponent
  },
  {
    path: 'signup',
    component: SignupScreenComponent
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
