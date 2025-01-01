import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildCreateFormComponent } from './build-create-form.component';

describe('BuildCreateFormComponent', () => {
  let component: BuildCreateFormComponent;
  let fixture: ComponentFixture<BuildCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildCreateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
