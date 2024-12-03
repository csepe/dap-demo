import { DOCUMENT } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, OnInit, Renderer2 } from '@angular/core';

export enum ThemeEnum {
  DARK = 'dark-theme',
  LIGHT = 'light-theme',
  HC = 'high-contrast-theme'
}

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.scss'
})
export class ThemeSelectorComponent implements OnInit {
  currentTheme: ThemeEnum = ThemeEnum.LIGHT;
  previousTheme: ThemeEnum = this.currentTheme;
  ThemeEnum = ThemeEnum;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    const theme = localStorage.getItem('theme') ?? this.currentTheme;
    this.renderer.addClass(this.document.body, theme);
  }

  setTheme(theme: ThemeEnum): void {
    if (theme === ThemeEnum.HC) {
      this.renderer.addClass(this.document.body, 'high-contrast-theme');
      this.renderer.removeClass(this.document.body, 'dark-theme');
      this.renderer.removeClass(this.document.body, 'light-theme');
    } else if (theme === ThemeEnum.DARK) {
      this.renderer.addClass(this.document.body, 'dark-theme');
      this.renderer.removeClass(this.document.body, 'light-theme');
      this.renderer.removeClass(this.document.body, 'high-contrast-theme');
      this.previousTheme = theme;
    } else {
      this.renderer.addClass(this.document.body, 'light-theme');
      this.renderer.removeClass(this.document.body, 'dark-theme');
      this.renderer.removeClass(this.document.body, 'high-contrast-theme');
      this.previousTheme = theme;
    }
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
  }
}
