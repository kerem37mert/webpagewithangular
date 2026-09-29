import { Routes } from '@angular/router';
import {Home, Profile} from './pages';
import { Contact } from './pages';
import { LINKS } from './constants';
import { MainLayout } from './components';
import {authGuard} from './guards/auth-guard';

export const routes: Routes = [
  {
    path: LINKS.home,
    component: MainLayout,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: LINKS.profile,
        component: Profile,
        canActivate: [authGuard],
      },
      {
        path: LINKS.contact,
        component: Contact,
      },
    ]
  },
];
