import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  imports: [],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {

  constructor(private router: Router) {

  }

  saveData() {
    alert("Registration successfully");
    this.router.navigate(['login']);

  }
}
