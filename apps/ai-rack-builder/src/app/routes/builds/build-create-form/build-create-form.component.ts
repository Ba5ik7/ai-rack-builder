import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BuildsService, BuildType } from '../../../common/services/builds.service';
import { MatDialogClose } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-build-create-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogClose,
  ],
  template: `
    <form [formGroup]="form">
      <h2>Create Build</h2>
      <mat-form-field>
        <mat-label>Name</mat-label>
        <input matInput cdkFocusInitial formControlName="title" />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Description</mat-label>
        <input matInput formControlName="description" />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Type</mat-label>
        <mat-select formControlName="description">
          @for (rackType of rackTypes; track rackType) {
          <mat-option [value]="rackType.value">{{ rackType.label }}</mat-option>
          }
        </mat-select>
      </mat-form-field>
      <button
        mat-button
        [disabled]="!form.valid"
        [mat-dialog-close]="true"
        (click)="buildService.createBuild(form.getRawValue())"
      >
        Create
      </button>
    </form>
  `,
  styles: `
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `,
})
export class BuildCreateFormComponent {
  buildService = inject(BuildsService);
  rackTypes: { value: BuildType; label: string }[] = [
    { value: BuildType.HOME_MINI_RACKS, label: 'Home Mini Racks' },
    { value: BuildType.HOME_RACKS, label: 'Home Racks' },
    { value: BuildType.OFFICE_RACKS, label: 'Office Racks' },
    { value: BuildType.SERVER_RACKS, label: 'Server Racks' },
    { value: BuildType.GAMING_RACKS, label: 'Gaming Racks' },
    { value: BuildType.CUSTOM_RACKS, label: 'Custom Racks' },
  ];

  form = inject(FormBuilder).nonNullable.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    type: [BuildType.HOME_MINI_RACKS, Validators.required],
  });
}
