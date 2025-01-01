import { Component, inject } from '@angular/core';
import { BuildDescriptionCardComponent } from './build-description-card/build-description-card.component';
import { BuildViewerCardComponent } from './build-viewer-card/build-viewer-card.component';
import { BuildComponentsListCardComponent } from './build-components-list-card/build-components-list-card.component';
import { BuildsService } from '../../../common/services/builds.service';

@Component({
  selector: 'app-build',
  styles: `
    :host {
      display: grid;
      grid: 1fr / 1fr 1fr;
      gap: 22px;
      .build-details {
        display: flex;
        flex-direction: column;
        gap: 22px;
        app-build-components-list-card {
          min-height: calc(100vh * 0.40);
        }
      }
    }
  `,
  imports: [
    BuildComponentsListCardComponent,
    BuildDescriptionCardComponent,
    BuildViewerCardComponent,
  ],
  template: `
    <app-build-viewer-card></app-build-viewer-card>
    <div class="build-details">
      <app-build-components-list-card></app-build-components-list-card>
      <app-build-description-card [build]="build.value()"></app-build-description-card>
    </div>

  `,
})
export class BuildComponent {
  build = inject(BuildsService).build
}
