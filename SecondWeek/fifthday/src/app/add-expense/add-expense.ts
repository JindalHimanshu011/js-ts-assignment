import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-expense',
  imports: [ReactiveFormsModule],
  templateUrl: './add-expense.html',
  styleUrl: './add-expense.css'
})
export class AddExpense {

  expenceForm: FormGroup = new FormGroup({
    category: new FormControl("", [Validators.required]),
    amount: new FormControl("", [Validators.required]),
    expenceName: new FormControl("", [Validators.required]),
    expenceDate: new FormControl(""),
  })
  today = new Date().toISOString().split('T')[0];
  constructor(private router: Router) {

  }

  save() {
    let formValue = this.expenceForm.value;
    interface expenceType {
      category: string;
      expenceName: string;
      amount: string;
      expenceDate: string
    }

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

}
