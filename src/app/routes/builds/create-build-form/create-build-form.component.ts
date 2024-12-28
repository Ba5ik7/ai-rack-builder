import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BuildsService } from '../../../common/services/builds.service';
import { MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-create-build-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
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
export class CreateBuildFormComponent {
  buildService = inject(BuildsService);

  form = inject(FormBuilder).nonNullable.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });
}
