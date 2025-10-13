import { Directive, ElementRef, Input, } from '@angular/core';

@Directive({
  selector: '[appCustomFavStyle]'
})
export class CustomFavStyle {
  @Input() appCustomFavStyle: boolean = false;

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    if (this.appCustomFavStyle) {
      this.el.nativeElement.style.display = null;
    }
  }

}
