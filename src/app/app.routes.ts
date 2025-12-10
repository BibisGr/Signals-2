import { Routes } from '@angular/router';
import { Signal } from './componentes/signal/signal';

export const routes: Routes = [
    {path:'', redirectTo: '/signals', pathMatch:'full'},
    {path: 'signals', component: Signal}
];
