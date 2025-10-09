import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

  isVisible: Boolean = false;
  users: number[] = [];

  private name: string = "";

  constructor( private router:Router) {

  }

  ngOnInit() {

    this.users = [1, 2, 3, 4, 5, 6, 7, 8];

    
    alert('Hello');
    this.isVisible = true;
    this.name = "himanshu";
  }

  private getName():void{

    console.log('Himanshu');


  }
  GoDashBoard(){
    this.router.navigate(['dashboard']);
  }
}


