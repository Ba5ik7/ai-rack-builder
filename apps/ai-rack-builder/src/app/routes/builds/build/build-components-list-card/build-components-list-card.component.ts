import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-build-components-list-card',
  imports: [MatCardModule, MatButtonModule],
  template: `
    <mat-card>
      <mat-card-actions align="end">
        <button mat-button>New Component</button>
      </mat-card-actions>
      <mat-card-content>
        <p>Components List</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: `mat-card { height: 100%; }`,
})
export class BuildComponentsListCardComponent {}
