import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

  isVisible: Boolean = false;
  users: number[] = [];
  constructor() {

  }

  ngOnInit() {

    this.users = [1, 2, 3, 4, 5, 6, 7, 8];

    alert('Hello');
    this.isVisible = true;
  }
}
