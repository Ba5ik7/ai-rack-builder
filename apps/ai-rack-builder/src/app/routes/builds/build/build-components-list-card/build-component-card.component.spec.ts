import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildComponentsListCardComponent } from './build-components-list-card.component';

describe('BuildComponentsListCardComponent', () => {
  let component: BuildComponentsListCardComponent;
  let fixture: ComponentFixture<BuildComponentsListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildComponentsListCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildComponentsListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
