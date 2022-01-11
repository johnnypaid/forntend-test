import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() showAdmin = new EventEmitter<boolean>();

  submitTitle = 'login';
  buttonText = 'login';
  registerText= 'REGISTER HERE';
  regInput = false;

  @Input() showForm = true;

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
        if (this.submitForm.valid) {
          console.log(this.submitForm.value);
          localStorage.setItem('isLogin', 'true');
          this.showAdmin.emit(true);
          this.showForm = false;
        } else {
          console.log('Not allowed..')
          this.showAdmin.emit(false);
        }
        break;
      }
      case 'register': {
        if (this.registerFrm.valid) {
          console.log(this.registerFrm.value);
          localStorage.setItem('isLogin', 'true');
          this.showAdmin.emit(true);
          this.showForm = false;
        } else {
          console.log('Not allowed..');
          this.showAdmin.emit(false);
        }
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
