import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { BuildsService } from '../../common/services/builds.service';

export const buildsRoutes: Routes = [
  {
    path: '',
    loadComponent() {
      return import('./builds.component').then((m) => m.BuildsComponent);
    },
    children: [
      {
        path: '',
        resolve: { builds: () => inject(BuildsService).builds },
        loadComponent: () =>
          import('./builds-list/builds-list.component').then(
            (m) => m.BuildsListComponent
          ),
      },
      {
        path: ':buildId',
        resolve: {
          build: (route: ActivatedRouteSnapshot) => {
            const param = route.routeConfig?.path ?? ':';// Path has a `:` prefix and need to remove it
            const buildId = route.params[param.substring(1)] ?? route.routeConfig?.path;
            return inject(BuildsService).selectedBuildId.set(buildId ?? '')
          }
        },
        loadComponent: () =>
          import('./build/build.component').then((m) => m.BuildComponent),
      },
    ],
  },
];
