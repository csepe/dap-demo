import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';

@Component({
    selector: 'app-root',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ThemeSelectorComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = '';

  onTitleChange(value: string) {
    this.title = value;
  }
}
