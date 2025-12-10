import { Routes } from '@angular/router';
import { Signal } from './componentes/signal/signal';
import { Mode } from './componentes/mode/mode';

export const routes: Routes = [
    {path:'', redirectTo: '/models', pathMatch:'full'},
    {path: 'signals', component: Signal},
    {path: 'models', component: Mode}
];
