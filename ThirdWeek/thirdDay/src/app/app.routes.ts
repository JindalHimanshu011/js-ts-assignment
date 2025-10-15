import { Routes } from '@angular/router';
import { Pipe } from './pipe/pipe'
import { ClassAttrBinding } from './class-attr-binding/class-attr-binding';
import { EventBindning } from './event-bindning/event-bindning';
import { User } from './user/user';
export const routes: Routes = [
    {
        path: '',
        component: Pipe
    },
    {
        path: 'classattr',
        component: ClassAttrBinding
    },
    {
        path: 'event',
        component: EventBindning
    },
    {
        path: 'user',
        component: User
    }

];
