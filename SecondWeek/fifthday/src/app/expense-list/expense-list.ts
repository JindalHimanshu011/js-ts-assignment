import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomStyle } from '../custom-style'
@Component({
  selector: 'app-expense-list',
  imports: [CommonModule, FormsModule, CustomStyle],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})


export class ExpenseList {
  returnData: any[] = [];
  CategoryFilter: string = '';
  DateFilter: string = '';

  constructor(private router: Router) { }

  ngOnInit() {

    interface expenceType {
      category: string;
      expenceName: string;
      amount: string;
      expenceDate: string
    }
    let expenceRecord: expenceType[] = [];

    let expences = localStorage.getItem('expences');
    let parseData = "";

    if (expences) {
      parseData = JSON.parse(expences);
      expenceRecord = Array.isArray(parseData) ? parseData : [];
    }
    this.returnData = expenceRecord;
  }


  filterData() {
    return this.returnData.filter(
      expence => expence.category?.toLowerCase().includes(this.CategoryFilter.toLowerCase())
        && expence.expenceDate?.toLowerCase().includes(this.DateFilter.toLowerCase()))
  }

  goBack() {
    this.router.navigate(['add-expence']);
  };
}
