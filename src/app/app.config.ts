import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from "@angular/platform-browser/animations";

import { provideTabs } from './app.tabs';
import { provideRouter } from '@angular/router';

const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideRouter([]),
    provideAnimations(),
    provideTabs()
  ]
};

export default APP_CONFIG;