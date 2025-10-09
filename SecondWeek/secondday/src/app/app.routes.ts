import { Routes } from '@angular/router';
import {User} from './user/user';
import {Dashboard} from './dashboard/dashboard'

export const routes: Routes = [
    {
        path:'',
        component : User
    },
    {
        path:'dashboard',
        component : Dashboard
    }
];
