import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reuseable',
  imports: [],
  templateUrl: './reuseable.html',
  styleUrl: './reuseable.css',
})
export class Reuseable {
  @Input() message: string = '';

}
