import { Component, inject, input } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import {
  IBuild,
  BuildsService,
} from '../../../../common/services/builds.service';

@Component({
  selector: 'app-build-description-card',
  imports: [MatCardModule, JsonPipe, MatButtonModule],
  template: `
    @if(build(); as build) {
    <mat-card>
      <mat-card-header>
        <mat-card-title>
          {{ build.title }}
        </mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>{{ build.type }}</p>
        <p>{{ build.rack }}</p>
        <p>{{ build.description }}</p>
        <pre>
          <code>
            {{ build.rackComponents | json }}
          </code>
        </pre>
      </mat-card-content>
      <mat-card-actions align="end">
        <button mat-button (click)="openDeleteDialog()">Delete</button>
      </mat-card-actions>
    </mat-card>
    }
  `,
  styles: ``,
})
export class BuildDescriptionCardComponent {
  dialog = inject(MatDialog);
  build = input<IBuild | undefined>(undefined);

  openDeleteDialog() {
    this.dialog.open(DeleteBuildDialogComponent);
  }
}
// * Dialog component
@Component({
  selector: 'app-delete-build-dialog',
  imports: [MatButtonModule, MatDialogModule],
  template: `
    <h2 mat-dialog-title>Delete Build</h2>
    <mat-dialog-content>
      <p>Are you sure you want to delete this build?</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button color="warn" (click)="deleteBuild()">Delete</button>
      <button mat-button mat-dialog-close>Cancel</button>
    </mat-dialog-actions>
  `,
})
export class DeleteBuildDialogComponent {
  buildsService = inject(BuildsService);
  dialog = inject(MatDialog);
  route = inject(ActivatedRoute);

  deleteBuild() {
    this.buildsService.deleteBuild(this.route.snapshot.params['buildId']);
    this.dialog.closeAll();
  }
}
