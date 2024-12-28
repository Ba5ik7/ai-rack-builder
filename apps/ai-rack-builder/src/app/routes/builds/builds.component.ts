import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BuildsService } from '../../common/services/builds.service';
import { CreateBuildCtaComponent } from './create-build-cta/create-build-cta.component';
import { BuildCardComponent } from './build-card/build-card.component';
import { CreateBuildFormComponent } from './create-build-form/create-build-form.component';

@Component({
  selector: 'app-builds',
  styles: [
    `
      main {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 1rem;
        justify-content: center;
      }
    `,
  ],
  imports: [BuildCardComponent, CreateBuildCtaComponent],
  template: `
    <main>
      <app-create-build-cta (click)="openDialog()"></app-create-build-cta>
      @for(build of buildService.buildCardItem(); track build) {
      <app-build-card [options]="build"></app-build-card>
      }
    </main>
  `,
})
export class BuildsComponent {
  dialog = inject(MatDialog);
  buildService = inject(BuildsService);

  openDialog() {
    this.dialog.open(CreateBuildDialogComponent);
  }
}

@Component({
  selector: 'app-create-build-cta-dialog',
  styles: [`
      :host {
        display: flex;
        gap: 1rem;
        padding: 1rem;
        justify-content: center;
      }
    `],
  imports: [CreateBuildFormComponent],
  template: `<app-create-build-form></app-create-build-form>`,
})
export class CreateBuildDialogComponent {}
