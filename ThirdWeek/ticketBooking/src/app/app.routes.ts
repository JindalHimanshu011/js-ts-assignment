import { Routes } from '@angular/router';
import { BookTicket } from './book-ticket/book-ticket';

export const routes: Routes = [
    {
        path: 'bookTicket',
        loadComponent: () => import('./book-ticket/book-ticket').then((c) => c.BookTicket)
    }
];
