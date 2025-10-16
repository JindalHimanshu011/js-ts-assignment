import { Routes } from '@angular/router';
import { MyObservable } from './my-observable/my-observable';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./my-observable/my-observable').then((c) => c.MyObservable)

    }
];
