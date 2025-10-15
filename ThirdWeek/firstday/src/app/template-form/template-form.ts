import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css'
})
export class TemplateForm {

  user = {
    userName: "Himanshu",
    userEmail: "Himanshu@gmail.com"
  }

  public submitForm(form: NgForm): void {


    if (form.valid) {
      console.log('Form Submitted:', form.value);
    } else {
      console.warn('Form is invalid');
    }
  }
}
