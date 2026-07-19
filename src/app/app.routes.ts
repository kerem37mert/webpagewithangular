import { Routes } from '@angular/router';
import { Home } from './pages';
import { Contact } from './pages';
import { LINKS } from '../constants';
import {MainLayout} from './components';

export const routes: Routes = [
  {
    path: LINKS.home,
    component: MainLayout,
    children: [
      {
        path: LINKS.home,
        component: Home,
      },
      {
        path: LINKS.contact,
        component: Contact,
      },
    ]
  }
];
