import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
    selector: 'app-components',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './components.component.html',
    styleUrl: './components.component.scss'
})
export class ComponentsComponent {

  variant = 'h1'

  onDDSInputChanged(event: CustomEvent) {
    console.log(event.detail.value);
  }

}
