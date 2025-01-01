import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () =>
      import('./routes/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'builds',
    title: 'Builds',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./routes/builds/builds.routes').then(
            (m) => m.buildsRoutes
          ),
      },
    ],
  },
];
