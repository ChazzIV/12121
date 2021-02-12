import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ConfirmValidParentMatcher, CustomValidators, errorMessages, regExps } from './customValidators';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userRegistrationForm: FormGroup;
  confirmValidParentMatcher = new ConfirmValidParentMatcher();
  errors = errorMessages;
  
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  // nickFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.minLength(1),
  //   Validators.maxLength(8)
  // ]);

  // passwordFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.pattern(regExps.password)
  // ]);

  // confirmPasswordFormControl = new FormControl('', [
  //   Validators.required
  // ]);

  // matcher = new MyErrorStateMatcher();

  constructor(  private formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {

  }

  createForm() {
      this.userRegistrationForm = this.formBuilder.group({
        nickFormControl: ['', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(8)
        ]],
        emailFormControl: ['', [
          Validators.required,
          Validators.email,
        ]],

        passwordGroup: this.formBuilder.group({
          password: ['', [
              Validators.required,
              Validators.pattern(regExps.password)
          ]],
          confirmPassword: ['', Validators.required]
      },{ validator: CustomValidators.childrenEqual} )
      });
  }

  register(): void {
    // API call to register your user
}

}