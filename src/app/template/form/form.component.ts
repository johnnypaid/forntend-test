import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  submitTitle = 'login';
  buttonText = 'login';
  registerText= 'REGISTER HERE';
  regInput = false;

  submitForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  registerFrm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPass: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    switch(this.submitTitle) {
      case 'login': {
        console.log(this.submitForm.valid);
        console.log(this.submitForm.value);
        break;
      }
      case 'register': {
        console.log(this.registerFrm.valid);
        console.log(this.registerFrm.value);
        break;
      }
    }
  }

  registerForm() {
    if (this.regInput === false ) {
      this.regInput = true;
      this.submitTitle = 'register';
      this.buttonText = 'register';
      this.registerText = 'LOGIN HERE'
    } else {
      this.regInput = false;
      this.submitTitle = 'login';
      this.buttonText = 'login';
      this.registerText = 'REGISTER HERE'
    }
  }

}
