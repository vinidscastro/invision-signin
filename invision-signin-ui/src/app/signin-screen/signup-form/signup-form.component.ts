import { Component, createPlatform, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SingnupModel } from 'src/app/models/signup-model';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {


  registerForm!: FormGroup;


  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.createform();
  }

  createform(){
    this.registerForm = this.formBuilder.group({
      name: this.formBuilder.control('',[Validators.required, Validators.minLength(1)]),
      email: this.formBuilder.control('',[Validators.required, Validators.email, Validators.minLength(1)]),
      password:this.formBuilder.control('',[Validators.required, Validators.minLength(6)])
    });
  }

  submitForm(){
    let user = new SingnupModel;
    if(this.registerForm.valid){
      user.name = this.registerForm.controls.name.value;
      user.email = this.registerForm.controls.email.value;
      user.password = this.registerForm.controls.password.value;

      // Coloquei o log somente para efeito de verificação do submit
      console.log(user);
    }
  }

}
