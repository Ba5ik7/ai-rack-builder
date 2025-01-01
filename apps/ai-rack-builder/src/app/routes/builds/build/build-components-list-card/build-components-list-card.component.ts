import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-build-components-list-card',
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-content>
        <p>Components List</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: ``,
})
export class BuildComponentsListCardComponent {}
