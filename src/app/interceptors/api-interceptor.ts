import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/env';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  const apiReq = req.clone({
    url: `${environment.apiUrl}${req.url}`,
    setHeaders: token ? { Authorization: `Bearer ${token}` } : {},
  });

  return next(apiReq);
};
