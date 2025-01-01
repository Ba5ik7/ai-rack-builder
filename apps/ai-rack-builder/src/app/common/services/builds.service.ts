import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { firstValueFrom, tap } from 'rxjs';

export interface IBuild {
  _id: string;
  title: string;
  description: string;
  type: BuildType;
  thumbnail: string;
  rack: string | undefined;
  rackComponents: string[];
}

export enum BuildType {
  HOME_MINI_RACKS = 'HOME_MINI_RACKS',
  HOME_RACKS = 'HOME_RACKS',
  OFFICE_RACKS = 'OFFICE_RACKS',
  SERVER_RACKS = 'SERVER_RACKS',
  GAMING_RACKS = 'GAMING_RACKS',
  CUSTOM_RACKS = 'CUSTOM_RACKS',
}

export type TCreateBuildRequestBody = Pick<
  IBuild,
  'title' | 'description' | 'type'
>;
export type TCreateBuildResponseBody = IBuild;
export type TGetBuildsResponseBody = IBuild[];
export type TBuildCard = Pick<
  IBuild,
  '_id' | 'title' | 'description' | 'thumbnail'
>;

@Injectable({
  providedIn: 'root',
})
export class BuildsService {
  private readonly RACK_BUILD_ENDPOINT = '/api/rack-builds';
  private readonly httpClient = inject(HttpClient);

  builds = rxResource({
    loader: () =>
      this.httpClient.get<TGetBuildsResponseBody>(this.RACK_BUILD_ENDPOINT),
  });

  createBuild(newBuild: TCreateBuildRequestBody) {
    return firstValueFrom(
      this.httpClient
        .post<TCreateBuildResponseBody>(this.RACK_BUILD_ENDPOINT, newBuild)
        .pipe(tap((build) => this.builds.update((p = []) => [...p, build])))
    );
  }

  selectedBuildId = signal<string | null>(null);
  build = rxResource({
    request: () => this.selectedBuildId(),
    loader: ({ request: id }) =>
      this.httpClient.get<IBuild>(`${this.RACK_BUILD_ENDPOINT}/${id}`),
  });

  updateBuild(id: string, updatedBuild: TCreateBuildRequestBody) {
    return firstValueFrom(
      this.httpClient
        .post<TCreateBuildResponseBody>(
          `${this.RACK_BUILD_ENDPOINT}/${id}`,
          updatedBuild
        )
        .pipe(tap((build) => this.build.update(() => build)))
    );
  }

  deleteBuild(id: string) {
    return firstValueFrom(
      this.httpClient
        .delete<TCreateBuildResponseBody>(`${this.RACK_BUILD_ENDPOINT}/${id}`)
        .pipe(
          tap(() =>
            this.builds.update((p = []) => p.filter((b) => b._id !== id))
          )
        )
    );
  }
}
