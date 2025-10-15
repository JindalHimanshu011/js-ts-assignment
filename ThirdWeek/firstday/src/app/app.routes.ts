import { Routes } from '@angular/router';
import { ReactiveForm } from './reactive-form/reactive-form';
import { TemplateForm } from './template-form/template-form';
export const routes: Routes = [
    {
        path: '',
        component: ReactiveForm
    },
    {
        path: 'reactive',
        component: ReactiveForm
    },
    {
        path: 'template',
        component: TemplateForm
    }
];
