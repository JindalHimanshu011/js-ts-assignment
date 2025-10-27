import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-ticket',
  imports: [],
  templateUrl: './book-ticket.html',
  styleUrl: './book-ticket.css'
})
export class BookTicket {
  constructor(private router: Router) {

  }
  public bookTicket(): void {
    this.router.navigate(['bookingList']);

  }

    public cancel(): void {
    this.router.navigate(['busList']);

  }
}
