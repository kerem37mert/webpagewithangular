import { Routes } from '@angular/router';
import { Home } from './pages';
import { Contact } from './pages';
import { LINKS } from '../constants';
import {MainLayout} from './components';
import {AuthLayout} from './components/auth-layout/auth-layout';
import {Login} from './pages/auth/login/login';
import {Register} from './pages/auth/register/register';

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
