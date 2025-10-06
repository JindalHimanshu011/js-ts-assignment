import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-item',
  imports: [NgFor],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  items: any[] = [];

  tagType = TagType;

  constructor(private router: Router) {

  }

  ngOnInit() {
    // type item = { name: string, lotNumber: string, quantity: number, manufacturingDate: string };

    // let items: item[] = [
    //   { name: 'chair', lotNumber: '12345', quantity: 12, manufacturingDate: '09/02/2024' },
    //   { name: 'table', lotNumber: '23456', quantity: 3, manufacturingDate: '10/02/2024' },
    //   { name: 'box', lotNumber: '34567', quantity: 7, manufacturingDate: '11/02/2024' },
    //   { name: 'gate', lotNumber: '45678', quantity: 8, manufacturingDate: '16/02/2024' },
    //   { name: 'almirah', lotNumber: '56789', quantity: 9, manufacturingDate: '13/02/2024' }
    // ]

    // let allitem = JSON.stringify(items);

    // localStorage.setItem('item', allitem);

    const data = localStorage.getItem('item');
    if (data) {
      const parseData = JSON.parse(data);
      this.items = Array.isArray(parseData) ? parseData : [];
    }
  }

  tagPrint(lot: string, tag: TagType) {
    this.router.navigate(['print', lot, tag]);
  }

}

export enum TagType {
  Normal = 'Normal',
  Export = 'Export',
  Return = 'Return'
}