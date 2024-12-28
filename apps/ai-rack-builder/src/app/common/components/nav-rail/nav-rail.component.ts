import { Component, signal } from '@angular/core';
import { NavRailMenuItemComponent } from './nav-rail-menu-item/nav-rail-menu-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const options = [
  { link: '/home', icon: 'home', text: 'Home' },
  { link: '/builds', icon: 'build', text: 'Builds' },
];

@Component({
  selector: 'nav-rail',
  styles: [
    `
      nav {
        display: flex;
        height: 100svh;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: column;
        button {
          margin-top: 1.1rem;
          margin-bottom: 1.1rem;
        }
      }
    `,
  ],
  imports: [NavRailMenuItemComponent, MatButtonModule, MatIconModule],
  template: `
    <nav>
      <button mat-fab title="Search">
        <mat-icon>search</mat-icon>
      </button>
      @for(options of options(); track options.text) {
      <nav-rail-menu-item [options]="options"></nav-rail-menu-item>
      }
    </nav>
  `,
})
export class NavRailComponent {
  options = signal(options);
}
