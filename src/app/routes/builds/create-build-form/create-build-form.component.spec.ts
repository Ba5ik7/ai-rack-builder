import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBuildFormComponent } from './create-build-form.component';

describe('CreateBuildFormComponent', () => {
  let component: CreateBuildFormComponent;
  let fixture: ComponentFixture<CreateBuildFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBuildFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBuildFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
