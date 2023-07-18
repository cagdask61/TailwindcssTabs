import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from "@angular/platform-browser/animations";

import APP_ROUTES from './app.routes';
import { provideTabs } from './app.tabs';

const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES),
    provideAnimations(),
    provideTabs()
  ]
};

export default APP_CONFIG;