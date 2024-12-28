import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  styles: [
    `
      mat-card-content {
        font-size: var(--mat-sys-display-large);
      }
    `,
  ],
  imports: [MatCardModule],
  template: `
    <mat-card appearance="outlined">
      <mat-card-content>Home</mat-card-content>
    </mat-card>
  `,
})
export class HomeComponent {}
