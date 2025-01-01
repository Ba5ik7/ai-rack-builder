import { HttpClient } from '@angular/common/http';
import { inject, Injectable, linkedSignal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

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
export type TBuildCard = Pick<IBuild, '_id' | 'title' | 'description' | 'thumbnail'>;

@Injectable({
  providedIn: 'root',
})
export class BuildsService {
  httpClient = inject(HttpClient);

  RACK_BUILD_ENDPOINT = '/api/rack-builds';
  builds = signal<IBuild[] | undefined>(undefined);

  createBuild(newBuild: TCreateBuildRequestBody) {
    return toSignal(
      this.httpClient.post<TCreateBuildResponseBody>(
        this.RACK_BUILD_ENDPOINT,
        newBuild
      )
    );
  }

  getBuilds() {
    return toSignal(
      this.httpClient
        .get<TGetBuildsResponseBody>(this.RACK_BUILD_ENDPOINT)
        .pipe(tap((builds) => this.builds.set(builds)))
    );
  }

  getBuild(id: string) {
    return toSignal(
      this.httpClient.get<IBuild>(`${this.RACK_BUILD_ENDPOINT}/${id}`)
    );
  }

  updateBuild(id: string, updatedBuild: TCreateBuildRequestBody) {
    return toSignal(
      this.httpClient.post<TCreateBuildResponseBody>(
        `${this.RACK_BUILD_ENDPOINT}/${id}`,
        updatedBuild
      )
    );
  }

  deleteBuild(id: string) {
    return toSignal(
      this.httpClient.delete<TCreateBuildResponseBody>(
        `${this.RACK_BUILD_ENDPOINT}/${id}`
      )
    );
  }
}
