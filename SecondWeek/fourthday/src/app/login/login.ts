import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  logInForm: FormGroup = new FormGroup({
    userName: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  loginUserName = "himanshu";
  heading = "Log in";
  btnLabel = "Registration";

  constructor(private router: Router) {

  }

  Registration() {
    this.router.navigate(['registration']);
  }
  LogIn() {

    alert("Log In Successfully");
    // this.router.navigate(['registration']);
  }

}




