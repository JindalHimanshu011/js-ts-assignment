import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-observable',
  imports: [CommonModule],
  templateUrl: './my-observable.html',
  styleUrl: './my-observable.css'
})
export class MyObservable {

  data: any[] = [];


  myObsrvl = new Observable((observer) => {
    //observer.next([1, 2, 3, 4]);
    // observer.next([1]);
    // observer.next([2]);
    // observer.next([3]);
    // observer.next([4]);
    // observer.next([5]);

    setTimeout(() => { observer.next([1]) }, 1000);
    setTimeout(() => { observer.next([2]) }, 2000);
    setTimeout(() => { observer.error(new Error('getting some error')) }, 3000);
    setTimeout(() => { observer.next([4]) }, 4000);
    setTimeout(() => { observer.complete() }, 4000);
  });


  public getData(): void {
    this.myObsrvl.subscribe((val: any) => {
      //this.data = val;
      this.data.push(val);
    },
      (err) => {
        alert(err.message);
      },
      () => {
        alert('my observable complete');
      });
  }
}
