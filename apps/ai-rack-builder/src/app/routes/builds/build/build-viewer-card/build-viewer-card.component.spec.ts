import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildViewerCardComponent } from './build-viewer-card.component';

describe('BuildViewerCardComponent', () => {
  let component: BuildViewerCardComponent;
  let fixture: ComponentFixture<BuildViewerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildViewerCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildViewerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
