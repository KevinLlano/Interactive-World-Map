import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
//HttpClientModule is scratch out in my IDE, but still works regardless
import { HttpClientModule } from '@angular/common/http'; 

import { routes } from './app.routes';


//Configuring providers, routers and adding HttpClientModule to call HttpClient
export const appConfig: ApplicationConfig = {
 
  providers: [
    provideRouter(routes), 
    importProvidersFrom(HttpClientModule) 
  ]
};
