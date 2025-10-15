import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomStyle } from '../custom-style'
import { expenceType } from '../interface'
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
  totalAmount: number = 0;
  constructor(private router: Router) { }

  public ngOnInit(): void {

    let expenceRecord: expenceType[] = [];

    let expences = localStorage.getItem('expences');
    let parseData = "";

    if (expences) {
      parseData = JSON.parse(expences);
      expenceRecord = Array.isArray(parseData) ? parseData : [];
    }
    this.returnData = expenceRecord;
  }


  public filterData(): any[] {
    debugger;
    this.totalAmount = 0;

    let filteredData = this.returnData.filter(
      expence => expence.category?.toLowerCase().includes(this.CategoryFilter.toLowerCase())
        && expence.expenceDate?.toLowerCase().includes(this.DateFilter.toLowerCase()));

    filteredData.map(item => {
      this.totalAmount += item.amount;
    })
    return this.returnData.filter(
      expence => expence.category?.toLowerCase().includes(this.CategoryFilter.toLowerCase())
        && expence.expenceDate?.toLowerCase().includes(this.DateFilter.toLowerCase()));
  }

  public goBack(): void {
    this.router.navigate(['add-expence']);
  };
}
