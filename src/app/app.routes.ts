import { Routes } from '@angular/router';
import { Home } from './pages';
import { Contact, Register, Login } from './pages';
import { LINKS } from '../constants';
import { MainLayout, AuthLayout } from './components';

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
