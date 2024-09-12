import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { isDevMode } from '@angular/core';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { UnitReducer } from './data-access/store/unit.reducer';
import { UnitEffects } from './data-access/store/unit.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideStore({
      units: UnitReducer
    }),
    provideAnimationsAsync(),  provideStoreDevtools({
    maxAge: 25,
    logOnly: !isDevMode(),
    autoPause: true,
    trace: false,
    traceLimit: 75,
    connectInZone: true
  })]
};
