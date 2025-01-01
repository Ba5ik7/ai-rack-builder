import { Component, inject, linkedSignal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BuildsService } from '../../../common/services/builds.service';
import { BuildCreateFormComponent } from '../build-create-form/build-create-form.component';
import { BuildCardComponent } from './build-card/build-card.component';
import { CreateBuildCtaComponent } from './create-build-cta/create-build-cta.component';

@Component({
  selector: 'app-build-lists',
  imports: [BuildCardComponent, CreateBuildCtaComponent],
  styles: `
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      padding: 1rem;
      justify-content: center;
    }
  `,
  template: `
    <app-create-build-cta (click)="openDialog()"></app-create-build-cta>
    @for(build of buildCardItem(); track build) {
    <app-build-card [options]="build"></app-build-card>
    }
  `,
})
export class BuildsListComponent {
  dialog = inject(MatDialog);
  buildsService = inject(BuildsService);

  buildCardItem = linkedSignal({
    source: this.buildsService.builds.value,
    computation: (newBuilds = []) =>
      newBuilds.map(({ _id, title, description, thumbnail }) => ({
        _id,
        title,
        description,
        thumbnail,
      })),
  });

  openDialog() {
    this.dialog.open(CreateBuildDialogComponent);
  }
}

// * Dialog
@Component({
  selector: 'app-create-build-cta-dialog',
  imports: [BuildCreateFormComponent, MatDialogModule],
  template: `
    <mat-dialog-content>
      <app-build-create-form></app-build-create-form>
    </mat-dialog-content>
  `,
})
export class CreateBuildDialogComponent {}
