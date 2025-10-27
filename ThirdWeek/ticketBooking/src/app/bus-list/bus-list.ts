import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-list',
  imports: [CommonModule],
  templateUrl: './bus-list.html',
  styleUrl: './bus-list.css'
})
export class BusList {
  public constructor(private router: Router) {

  }
  BusRecord: any[] = [];

  ngOnInit() {
    let busList = [];
    let data = localStorage.getItem('busList');
    if (data) {
      let parseData = JSON.parse(data);
      busList = Array.isArray(parseData) ? parseData : [];
      this.BusRecord = busList;
    }

  }

  public Busdetails(id = ''): void {
    this.router.navigate(['busDetail', id]);
  }





}
