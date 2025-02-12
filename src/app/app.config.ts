import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {TimeApiModule} from './api/time';
import {environments} from '../environments/environment';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    importProvidersFrom(TimeApiModule.forRoot({rootUrl: environments.timeApiUrl})),
    provideHttpClient(withInterceptorsFromDi())]
};
