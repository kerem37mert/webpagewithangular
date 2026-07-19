import { Routes } from '@angular/router';
import { Home } from './pages';
import { Contact } from './pages';
import { LINKS } from '../constants';

export const routes: Routes = [
  {
    path: LINKS.home,
    component: Home,
  },
  {
    path: LINKS.contact,
    component: Contact,
  },
];
