import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'homicidios',
        loadComponent: () => import('./reports/homicides/homicides.component').then(m => m.HomicidesComponent),
      },
      {
        path: '**',
        redirectTo: 'homicidios',
      }
    ]
  },
];
