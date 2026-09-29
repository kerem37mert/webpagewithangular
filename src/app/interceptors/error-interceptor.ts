import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError, tap, throwError} from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 0) {
        console.error('Check CORS error.');
      }

      return throwError(() => error);
    }),
  );
};
