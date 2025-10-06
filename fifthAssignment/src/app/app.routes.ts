import { Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { PrintComponent } from './print/print.component';
import {AssignmentComponent} from './assignment/assignment.component';
export const routes: Routes = [
    {
        path: '',
        component : AssignmentComponent
        //component: ItemComponent
    },
        {
        path: 'item',
        component: ItemComponent
    },
        {
        path: 'print/:lot/:tagType',
        component: PrintComponent
    }

];
