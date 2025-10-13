import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css'
})
export class TemplateForm {

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted:', form.value); // access form values here
    } else {
      console.warn('Form is invalid');
    }
  }
}
