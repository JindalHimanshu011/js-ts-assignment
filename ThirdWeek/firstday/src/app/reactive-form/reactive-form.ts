import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {
  form = new FormGroup({
    username: new FormControl('', [Validators.required])
  });

  submitForm() {
    console.log(this.form.value);
  }
}
