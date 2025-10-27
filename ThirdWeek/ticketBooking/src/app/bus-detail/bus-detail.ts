import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bus-detail',
  imports: [CommonModule],
  templateUrl: './bus-detail.html',
  styleUrl: './bus-detail.css'
})
export class BusDetail {
  returnData: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    let busId = this.route.snapshot.paramMap.get('id');

    let buses = localStorage.getItem('busList');
    if (buses) {
      let parseData = JSON.parse(buses);
      let bus = Array.isArray(parseData) ? parseData : [];
      this.returnData = bus.filter(b => b.bus_id == busId);
    }

  }



  public bookTicket(): void {
    this.router.navigate(['bookTicket']);
  }

    public goBack(): void {
    this.router.navigate(['busList']);
  }
}


