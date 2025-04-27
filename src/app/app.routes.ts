import { provideRouter, Routes, withHashLocation } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/request-explorer', pathMatch: 'full' },
  {
    path: 'request-explorer',
    title: 'Request Explorer',
    loadChildren: () => import('./features/request-explorer/request-explorer.routes').then(m => m.requestExplorerRoutes),
  },
  {
    path: '**',
    redirectTo: 'request-explorer'
  }
];

export const appRouterProviders = provideRouter(routes, withHashLocation());