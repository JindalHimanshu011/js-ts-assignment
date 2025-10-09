import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Registration } from './registration/registration'
export const routes: Routes = [
    {
        path: '',
        component: Login
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'registration',
        component: Registration
    }
];
