import { Routes } from '@angular/router';
import { PocComponent } from './poc/poc.component';

export const routes: Routes = [
  {
    path: '',
    component: PocComponent,
    title: 'Authorized Security PoC Origin'
  },
  {
    path: 'poc',
    component: PocComponent,
    title: 'Authorized Security PoC'
  },
  {
    path: 'ovawatch-subdomain-takeover-poc',
    component: PocComponent,
    title: 'Authorized Security PoC'
  },
  {
    path: '**',
    component: PocComponent,
    title: 'Authorized Security PoC Origin'
  }
];
