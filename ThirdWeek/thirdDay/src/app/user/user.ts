import { Component } from '@angular/core';
import { UserData } from '../service/user-data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule,CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

  username = "";
  usernameError = "";
  constructor(private userData: UserData) {

  }

  public getUser(): void {
    const name = this.userData.getuser();
    alert(name);
  }

  public updateUser(user: string): void {
    this.userData.setuser(user);
    alert('User updated successfully');
  }

  public inputUpdate(field: 'username', value: string): void {
    debugger;
    if (field === 'username') {
      this.username = value;
      if (value.length > 5) {
        this.usernameError = "Lenght must be less then 5";
      }
      else{
        this.usernameError = "";
      }
    }
  }

 public isError():Boolean
 {
  return !!this.usernameError;
 }

}
