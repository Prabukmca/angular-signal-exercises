
export const requestExplorerRoutes = [
  {
    path: '',
    loadComponent: () => import('./containers/request-explorer-container/request-explorer-container.component').then(m => m.RequestExplorerContainerComponent),
    children: [
      {
        path: 'copy-request',
        loadComponent: () => import('./components/copy-request/copy-request.component').then(m => m.CopyRequestComponent),
      },
      {
        path: 'delete-request',
        loadComponent: () => import('./components/delete-request/delete-request.component').then(m => m.DeleteRequestComponent),
      }
    ]
  }
];

// export const requestExplorerProviders = provideRouter(requestExplorerRoutes);

