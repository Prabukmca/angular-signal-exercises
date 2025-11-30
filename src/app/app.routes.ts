import { provideRouter, Routes, withHashLocation } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  {
    path: 'auth',
    title: 'Authentication',
    loadChildren: () => import('./features/auth/auth-routing.module').then(m => m.AuthRoutingModule),
  },
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
