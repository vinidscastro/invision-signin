import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SinginModel } from 'src/app/models/signin-model';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {

  signinForm!: FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.createform();
  }

  createform(){
    this.signinForm = this.formBuilder.group({
      email: this.formBuilder.control('',[Validators.required, Validators.email, Validators.minLength(1)]),
      password:this.formBuilder.control('',[Validators.required, Validators.minLength(6)])
    });
  }

  submitForm(){
    let user = new SinginModel;
    if(this.signinForm.valid){
      user.email = this.signinForm.controls.email.value;
      user.password = this.signinForm.controls.password.value;

      // Coloquei o log somente para efeito de verificação do submit
      console.log(user);
    }
  }

}
