import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { BuildsService } from '../../../common/services/builds.service';

@Component({
  selector: 'app-build',
  styles: ``,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Build</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>Build content {{ build }}</p>
      </mat-card-content>
    </mat-card>
  `,
})
export class BuildComponent {
  build = inject(BuildsService).getBuild(
    inject(ActivatedRoute).snapshot.params['buildId']
  );
}
