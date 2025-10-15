import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {expenceType} from '../interface'
@Component({
  selector: 'app-add-expense',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-expense.html',
  styleUrl: './add-expense.css'
})
export class AddExpense {

  expenceForm: FormGroup = new FormGroup({
    category: new FormControl("", [Validators.required, Validators.maxLength(15)]),
    amount: new FormControl("", [Validators.required]),
    expenceName: new FormControl("", [Validators.required]),
    expenceDate: new FormControl(""),
  })
  today = new Date().toISOString().split('T')[0];
  constructor(private router: Router) {

  }

  public save(): void {
    console.log('hello');
    let formValue = this.expenceForm.value;

    let expence: expenceType = {
      category: formValue.category,
      expenceName: formValue.expenceName,
      amount: formValue.amount,
      expenceDate: formValue.expenceDate
    }
    let parseData = "";
    let expenceRecord: expenceType[] = [];

    let expences = localStorage.getItem('expences');

    if (expences) {
      parseData = JSON.parse(expences);
      expenceRecord = Array.isArray(parseData) ? parseData : [];
    }
    expenceRecord.push(expence);

    localStorage.setItem('expences', JSON.stringify(expenceRecord));
    this.router.navigate(['expencelist']);
  }

  public goExpense(): void {
    this.router.navigate(['expencelist']);
  }
}
