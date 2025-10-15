import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormsModule, NgForm } from '@angular/forms';
import { UpdateData } from '../update-data'
@Component({
  selector: 'app-all-validation',
  imports: [FormsModule, CommonModule],
  templateUrl: './all-validation.html',
  styleUrl: './all-validation.css'
})
export class AllValidation {

  displayMessage: string = '';

  email: string = '';
  name: string = '';
  password: string = '';
  confirmPassword: string = '';


  passwordError: string = '';
  confirmPasswordError: string = '';
  nameError: string = '';
  emailError: string = '';

  constructor(private updateData: UpdateData) {

  }

  public showMessage(event: any): void {
    this.displayMessage = event.target.value;
  }


  public submitForm(form: NgForm): void {
    debugger;

    if (!this.hasErrors()) {
      console.log('Form submitted', {
        name: this.name,
        email: this.email,
        password: this.password
      });
      this.updateData.UploadData(this.name);
    } else {
      console.warn('Fix form errors before submitting');
    }


  }

  public onInputChange(field: 'name' | 'email' | 'password' | 'confirmPassword', value: string): void {
    if (field === 'name') {
      this.name = value;

      if (!value.trim()) {
        this.nameError = 'Name is required';
      } else if (value.length > 5) {
        this.nameError = 'Name must be at most 5 characters';
      } else {
        this.nameError = '';
      }
    }

    if (field === 'email') {
      this.email = value;

      if (!value.trim()) {
        this.emailError = 'Email is required';
      } else if (!this.isValidEmail(value)) {
        this.emailError = 'Invalid email format';
      } else {
        this.emailError = '';
      }
    }
    if (field === 'password') {
      this.password = value;

      if (!value.trim()) {
        this.passwordError = 'password is required';
      } else if (this.password.length < 6) {
        this.passwordError = 'Password must be greter then 6 charactor';
      } else {
        this.passwordError = '';
      }
      this.validatePasswordMatch();
    }

    if (field === 'confirmPassword') {
      this.confirmPassword = value;
      this.validatePasswordMatch();
    }
  }

  public validatePasswordMatch(): void {
    debugger;
    if (!this.confirmPassword.trim()) {
      this.confirmPasswordError = 'Confirm Password is required';
    } else if (this.password !== this.confirmPassword) {
      this.confirmPasswordError = 'Passwords do not match';
    } else {
      this.confirmPasswordError = '';
    }
  }

  public isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return emailPattern.test(email);
  }

  hasErrors(): boolean {
    return !!(
      this.nameError ||
      this.emailError ||
      this.passwordError ||
      this.confirmPasswordError
    );
  }
}
