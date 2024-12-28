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
        loadComponent: () =>
          import('./routes/builds/builds.component').then(
            (m) => m.BuildsComponent
          ),
      },
      {
        path: ':buildId',
        loadComponent: () =>
          import('./routes/builds/build/build.component').then(
            (m) => m.BuildComponent
          ),
      },
    ],
  },
];
