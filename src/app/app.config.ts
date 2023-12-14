import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'lib-me',
          appId: '1:165864893716:web:1a96ecce273438c191e601',
          databaseURL: 'https://lib-me-default-rtdb.firebaseio.com',
          storageBucket: 'lib-me.appspot.com',
          apiKey: 'AIzaSyBPJu9_CLoD4wFv8BsgqVSCJkuH1cF6s5Y',
          authDomain: 'lib-me.firebaseapp.com',
          messagingSenderId: '165864893716',
        })
      )
    ),
    importProvidersFrom(provideDatabase(() => getDatabase())),
  ],
};
