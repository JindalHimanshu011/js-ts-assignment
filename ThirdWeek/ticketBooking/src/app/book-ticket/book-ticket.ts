import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-ticket',
  imports: [CommonModule, FormsModule],
  templateUrl: './book-ticket.html',
  styleUrl: './book-ticket.css'
})
export class BookTicket {

  name: string = '';
  mobile: string = '';
  date: string = '';
  passengers: number = 0;
  busId = '';

  nameError: string = '';
  mobileError: string = '';
  dateError: string = '';
  passengerError: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngFormInit() {
    let busId = this.route.snapshot.paramMap.get('id');
    this.busId = busId ?? '';
  }

  public cancel(): void {
    this.router.navigate(['busList']);

  }

  public onInputChange(field: 'date' | 'passengers' | 'name' | 'mobile', value: any): void {
    if (field === 'date') {
      this.date = value;
      const today = new Date();
      const inputDate = new Date(this.date);
      today.setHours(0, 0, 0, 0);
      inputDate.setHours(0, 0, 0, 0);

      if (inputDate < today) {
        this.dateError = 'date should not be past days';
      } else {
        this.dateError = '';
      }
    }

    if (field === 'passengers') {
      this.passengers = value;
      if (value > 10) {
        this.passengerError = 'passenger must be less then or equal to 10';
      } else if (value > 0) {
        this.passengerError = '';
      } else {
        this.passengerError = 'passenger is required';
      }
    }

    if (field === 'name') {
      this.name = value;
      if (!value.trim()) {
        this.nameError = 'Name is required';
      } else if (value.length > 15) {
        this.nameError = 'Name must be at most 15 characters';
      } else {
        this.nameError = '';
      }
    }


    if (field === 'mobile') {
      this.mobile = value;

      if (!value.trim()) {
        this.mobileError = 'Mobile is required';
      } else if (!this.isValidMobile(value)) {
        this.mobileError = 'Invalid mobile format';
      } else {
        this.mobileError = '';
      }
    }

  }

  public submitForm(form: NgForm): void {
    debugger;
    alert('hello');

    this.router.navigate(['bookingList']);
  }

  hasErrors(): boolean {
    return !!(
      this.dateError ||
      this.passengerError ||
      this.nameError ||
      this.mobileError
    );
  }

  public isValidMobile(mobile: string): boolean {
    const mobilePattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    return mobilePattern.test(mobile);
  }
}
