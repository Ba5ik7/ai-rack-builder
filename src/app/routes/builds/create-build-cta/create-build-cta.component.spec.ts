import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBuildCtaComponent } from './create-build-cta.component';

describe('CreateBuildCtaComponent', () => {
  let component: CreateBuildCtaComponent;
  let fixture: ComponentFixture<CreateBuildCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBuildCtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBuildCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
