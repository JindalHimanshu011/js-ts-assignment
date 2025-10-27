import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'bookTicket',
        loadComponent: () => import('./book-ticket/book-ticket').then((c) => c.BookTicket)
    },
    {
        path: '',
        loadComponent: () => import('./bus-list/bus-list').then((c) => c.BusList)
    },
    {
        path: 'busList',
        loadComponent: () => import('./bus-list/bus-list').then((c) => c.BusList)
    },
        {
        path: 'busDetail/:id',
        loadComponent: () => import('./bus-detail/bus-detail').then((c) => c.BusDetail)
    },
        {
        path: 'bookingList',
        loadComponent: () => import('./booking-list/booking-list').then((c) => c.BookingList)
    }
];
