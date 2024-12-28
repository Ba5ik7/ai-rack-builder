import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavRailComponent } from './common/components/nav-rail/nav-rail.component';

@Component({
  selector: 'app-root',
  styles: [
    `
      nav-rail {
        position: fixed;
        left: 0;
        right: 0;
        z-index: 2;
        width: 88px;
      }
      main {
        margin-left: 88px;
        padding: 20px;
      }
    `,
  ],
  imports: [NavRailComponent, RouterModule],
  template: `
    <nav-rail></nav-rail>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent {}
