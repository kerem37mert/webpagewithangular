import {ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {apiInterceptor} from './interceptors/api-interceptor';
import {AuthService} from './services/auth';
import {errorInterceptor} from './interceptors/error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAppInitializer(() => inject(AuthService).initKeycloak()),
    provideHttpClient(withInterceptors([apiInterceptor, errorInterceptor])),
  ]
};
