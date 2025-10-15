import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-bindning',
  imports: [FormsModule],
  templateUrl: './event-bindning.html',
  styleUrl: './event-bindning.css'
})
export class EventBindning {

  name = "";

  public showMessage(): void {
    alert("Show Messasge");
  }

  public showEvent(field: 'name', event: any): void {
    alert("Show Messasge");
  }

  public showEventNormal(event: any): void {
    alert("Show Messasge");
  }

  public sayHello(name: string) {
    alert(`Hi ${name}`);

  }

  public submitData(form: NgForm) {
    console.log(form.value);
  }
}
