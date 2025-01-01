import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildDescriptionCardComponent } from './build-description-card.component';

describe('BuildDescriptionCardComponent', () => {
  let component: BuildDescriptionCardComponent;
  let fixture: ComponentFixture<BuildDescriptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildDescriptionCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildDescriptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
