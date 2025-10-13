import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightAmount]'
})
export class HighlightAmountDirective implements OnInit {

  @Input('appHighlightAmount') amount: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.amount < 100) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
    } else if (this.amount < 500) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'orange');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    }
  }
}
