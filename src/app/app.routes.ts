import { Routes } from '@angular/router';
import {Home, Profile} from './pages';
import { Contact } from './pages';
import { LINKS } from './constants';
import { MainLayout } from './components';
import {authGuard} from './guards/auth-guard';

export const routes: Routes = [
  {
    path: "",
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      {
        path: LINKS.home,
        component: Home,
      },
      {
        path: LINKS.profile,
        component: Profile,
      },
      {
        path: LINKS.contact,
        component: Contact,
      },
    ]
  },
];
