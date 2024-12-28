import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-create-build-cta',
  styles: [
    `
      mat-card {
        cursor: pointer;
        width: 300px;
        height: 300px;
        overflow: hidden;
        &.create-build-cta {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 3rem;
          color: white;
          background-color: #1976d2;
          mat-icon {
            font-size: 10rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    `,
  ],
  imports: [MatCardModule, MatIconModule],
  template: `
    <mat-card class="create-build-cta">
      <mat-icon inline="true">add</mat-icon>
    </mat-card>
  `,
})
export class CreateBuildCtaComponent {}
