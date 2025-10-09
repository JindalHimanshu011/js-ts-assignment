import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
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
