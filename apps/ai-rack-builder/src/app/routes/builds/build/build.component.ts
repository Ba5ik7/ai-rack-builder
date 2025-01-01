import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuildsService } from '../../../common/services/builds.service';
import { BuildDescriptionCardComponent } from './build-description-card/build-description-card.component';
import { BuildViewerCardComponent } from './build-viewer-card/build-viewer-card.component';
import { BuildComponentsListCardComponent } from './build-components-list-card/build-components-list-card.component';

@Component({
  selector: 'app-build',
  styles: ``,
  imports: [
    BuildComponentsListCardComponent,
    BuildDescriptionCardComponent,
    BuildViewerCardComponent,
  ],
  template: `
    <app-build-components-list-card></app-build-components-list-card>
    <app-build-viewer-card></app-build-viewer-card>
    <app-build-description-card [build]="build()"></app-build-description-card>
  `,
})
export class BuildComponent {
  build = inject(BuildsService).getBuild(
    inject(ActivatedRoute).snapshot.params['buildId']
  );
}
