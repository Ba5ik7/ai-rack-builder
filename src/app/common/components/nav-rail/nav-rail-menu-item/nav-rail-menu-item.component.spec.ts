import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRailMenuItemComponent } from './nav-rail-menu-item.component';

describe('NavRailMenuItemComponent', () => {
  let component: NavRailMenuItemComponent;
  let fixture: ComponentFixture<NavRailMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavRailMenuItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavRailMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
