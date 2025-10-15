import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
})

export class CustomStyle {
  @Input() appCustomStyle: number = 0;
  constructor(private el: ElementRef) {

  }
  public ngOnInit(): void {
    if (this.appCustomStyle > 1000) {
      this.el.nativeElement.style.color = "red";
    }
    else if (this.appCustomStyle > 500) {
      this.el.nativeElement.style.color = "green";
    }


  }

}
