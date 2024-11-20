import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  form: FormGroup;
  formInitialValues: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email]],
      birthdate: [null, Validators.required],
      radio: [''],
      type: [''],
      message: ['', [Validators.required, Validators.minLength(15)]],
      accepted: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {
    const data = {
      name: 'Sammy',
      email: '',
      birthdate: new Date(),
      radio: 'radio-2',
      type: '',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      accepted: true
    }
    this.initForm(data);
  }

  isInputValid(name: string): boolean {
    return !(this.form.get(name)?.invalid && (this.form.get(name)?.dirty || this.form.get(name)?.touched)) || false;
  }

  log(event: CustomEvent): void {
    console.log(event);
  }

  initForm(data: any): void {
    this.form.patchValue(data);
    this.formInitialValues = this.form.value;
  }

  resetForm(): void {
    this.form.reset(this.formInitialValues);
  }

  submitForm(form: FormGroup): void {
    console.log(form.value);
  }

  setFormValue(name: string, event: CustomEvent): void {
    let value = event?.detail?.value ?? '';
    if ('indeterminate' in event?.detail && 'checked' in event?.detail) {
      value = event?.detail?.checked;
    }
    this.form.controls[name].setValue(value);
  }

  getFormValue(name: string): any {
    return this.form.controls[name].value;
  }
}
