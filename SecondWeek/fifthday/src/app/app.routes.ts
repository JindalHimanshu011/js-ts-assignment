import { Routes } from '@angular/router';
import {AddExpense} from './add-expense/add-expense';
import {ExpenseList} from './expense-list/expense-list';
export const routes: Routes = [
    {
        path:'',
        component:AddExpense
    },
    {
        path:'add-expence',
        component:AddExpense
    },
    {
        path:'expencelist',
        component:ExpenseList
    },

];
