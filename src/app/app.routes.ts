import { Routes } from '@angular/router';
import { ComponentsComponent } from './pages/components/components.component';
import { FormComponent } from './pages/form/form.component';

export const routes: Routes = [
    { path: '', component: ComponentsComponent },
    { path: 'form', component: FormComponent },
];
