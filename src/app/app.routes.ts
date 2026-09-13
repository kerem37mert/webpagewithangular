import { Routes } from '@angular/router';
import { Home } from './pages';
import { Contact, Register, Login } from './pages';
import { LINKS } from './constants';
import { MainLayout, AuthLayout } from './components';
import {authGuard} from './guards/auth-guard';

export const routes: Routes = [
  {
    path: LINKS.home,
    component: MainLayout,
    children: [
      {
        path: "",
        component: Home,
        canActivate: [authGuard],
      },
      {
        path: LINKS.contact,
        component: Contact,
      },
    ]
  },
  {
    path: LINKS.auth,
    component: AuthLayout,
    children: [
      {
        path: "",
        redirectTo: LINKS.login,
        pathMatch: "full",
      },
      {
        path: LINKS.login,
        component: Login
      },
      {
        path: LINKS.register,
        component: Register
      },
    ]
  }
];
