import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserData {

  public setuser(userName: string): void {
    localStorage.setItem('userData', userName);

  }
  public getuser(): string {
    const name = localStorage.getItem('userData');
    return name ?? '';
  }
}
