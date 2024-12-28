import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

interface NavRailMenuItemComponentInputOptions {
  link: string;
  icon: string;
  text: string;
}

@Component({
  selector: 'nav-rail-menu-item',
  styles: `
    @use '@angular/material' as mat;
    :host {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.35rem;
      padding-block: 0.65rem;
      font-size: 0.75rem;
      letter-spacing: 0.1px;
      font-weight: 400;
      .selected {
        background-color: var(--mat-sys-tertiary-container);
        color: var(--mat-sys-on-tertiary-container);
      }
      button.mdc-button {
        min-width: 56px;
        height: 32px;
      }
      @include mat.button-overrides((
        text-icon-spacing: 0,
        text-icon-offset: 0,
      ));
      @include mat.fab-overrides((
        container-elevation-shadow: none,
        focus-container-elevation-shadow: none,
      ));
      &:hover {
        font-weight: 600;
      }
    }
  `,
  imports: [MatButtonModule, MatIconModule, RouterModule],
  template: `
    @if(options(); as options) {
    <button
      mat-button
      [title]="options.text"
      [routerLink]="options.link"
      routerLinkActive="optionsselected"
    >
      <mat-icon>{{ options.icon }}</mat-icon>
    </button>
    {{ options.text }}
    }
  `,
})
export class NavRailMenuItemComponent {
  options = input.required<NavRailMenuItemComponentInputOptions>();
}
