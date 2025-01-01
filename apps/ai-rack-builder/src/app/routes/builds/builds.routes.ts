import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { BuildsService } from '../../common/services/builds.service';

export const buildsRoutes: Routes = [
  {
    path: '',
    loadComponent() {
      return import('./builds.component').then(
        (m) => m.BuildsComponent
      );
    },
    children: [
      {
        path: '',
        resolve: { builds: () => inject(BuildsService).getBuilds() },
        loadComponent: () =>
          import('./builds-list/builds-list.component').then(
            (m) => m.BuildsListComponent
          ),
      },
      {
        path: ':buildId',
        loadComponent: () =>
          import('./build/build.component').then(
            (m) => m.BuildComponent
          ),
      },
    ],
  },
];
