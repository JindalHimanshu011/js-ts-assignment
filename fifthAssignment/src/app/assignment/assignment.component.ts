import { Component } from '@angular/core';
import { expand } from 'rxjs';

@Component({
  selector: 'app-assignment',
  imports: [],
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
})
export class AssignmentComponent {

  ngOnInit() {

    //---------access modifier
    const p = new Person("Alice", 30, '123456789');
    p.greet();
    //let Age = p.age;    --error because of private access modifier
    let Name = p.name;
    //let mobile =p.mobile; -- error protected access modifier

    const o = new office("Buddy", 14, '3563452342');
    o.getName();
    //let mobile = o.mobile; protect type error
    //---------access modifier


    //---------generics
    const result = this.identity<string>("Hello");

    const inferred = this.identity(42);

    type Wrapper<T> = {
      value: T;
    };

    const wrappedNumber: Wrapper<number> = { value: 123 };
    const wrappedString: Wrapper<string> = { value: "hello" };
    //---------generics


    //DOM Practical
    const btn = document.getElementById("clickBtn") as HTMLButtonElement;

    btn.addEventListener("click", () => console.log("Clicked"));




    const input = document.getElementById("username") as HTMLInputElement;

    input.value = "John Doe";
    console.log(input.value);





    const form = document.getElementById("loginForm") as HTMLFormElement;
    const email = document.getElementById("email") as HTMLInputElement;

    form.addEventListener("submit", (e: SubmitEvent) => {
      e.preventDefault();
      console.log("Submitted:", email.value);
    });





    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;

      if (target.tagName === "BUTTON") {
        console.log("You clicked a button:", target.innerText);
      }
    });





    const newDiv = document.createElement("div");
    newDiv.textContent = "Hello TypeScript!";
    newDiv.classList.add("card");

    document.body.appendChild(newDiv);






    const btnn = document.getElementById("incrementBtn") as HTMLButtonElement;
    const display = document.getElementById("counterDisplay") as HTMLElement;

    new Counter(btnn, display);

  }



  identity<T>(arg: T): T {
    return arg;
  }

  firstElement<T>(arr: T[]): T {
    return arr[0];
  }



}

//class and access modifier
class Person {
  public name: string;
  private age: number;
  protected mobile: string;

  constructor(name: string, age: number, mobile: string) {
    this.name = name;
    this.age = age;
    this.mobile = mobile;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
    console.log(`Hello, my age is ${this.age}`);
  }
}

class office extends Person {
  public getName(): void {
    console.log(`my name is ${this.name}`);
  }
}







//DOM Practice
class Counter {
  private count = 0;

  constructor(private btn: HTMLButtonElement, private display: HTMLElement) {
    this.btn.addEventListener("click", () => this.increment());
  }

  increment() {
    this.count++;
    this.display.textContent = `Count: ${this.count}`;
  }
}