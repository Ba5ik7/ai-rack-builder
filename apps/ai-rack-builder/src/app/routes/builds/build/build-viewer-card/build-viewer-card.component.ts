import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-build-viewer-card',
  imports: [MatCardModule],
  template: `
    <mat-card>
      <img mat-card-image src="https://via.placeholder.com/150" alt="Build Thumbnail" />
    </mat-card>
  `,
})
export class BuildViewerCardComponent {}
