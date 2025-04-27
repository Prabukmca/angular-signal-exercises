import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

import { appRouterProviders } from './app.routes';
import { TitleStrategy } from '@angular/router';
import { TemplatePageTitleStrategy } from './common/page-title.service';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    appRouterProviders,
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
    provideHttpClient(),
  ],
};
