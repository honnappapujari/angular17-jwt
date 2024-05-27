import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"angular-fde6b","appId":"1:807562902176:web:16be4fab4198568f2127c5","databaseURL":"https://angular-fde6b-default-rtdb.firebaseio.com","storageBucket":"angular-fde6b.appspot.com","apiKey":"AIzaSyC5QTViGl2rk6SMSsld2Jk8qH_4ULgA2dY","authDomain":"angular-fde6b.firebaseapp.com","messagingSenderId":"807562902176"})), provideFirestore(() => getFirestore())]
};
