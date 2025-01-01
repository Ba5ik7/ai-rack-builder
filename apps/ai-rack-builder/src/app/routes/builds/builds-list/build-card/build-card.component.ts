import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TBuildCard } from '../../../../common/services/builds.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-build-card',
  styles: `
      mat-card {
        cursor: pointer;
        width: 300px;
        height: 300px;
        overflow: hidden;
        h2 {
          position: absolute;
          bottom: 0;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          padding: 0.5rem;
          margin: 0;
        }
        img {
          height: 100%;
          object-fit: cover;
        }
      }
    `,
    imports: [MatCardModule, RouterModule],
    template: `
      <mat-card [routerLink]="['/builds', options()._id]">
        <img mat-card-image src="{{ options().thumbnail }}" />
        <h2>{{ options().title }}</h2>
      </mat-card>
    `,
})
export class BuildCardComponent {
  options = input.required<TBuildCard>();
}
