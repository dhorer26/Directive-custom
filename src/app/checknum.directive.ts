import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChecknum]'
})
export class ChecknumDirective {
  element: any;
  constructor(private el: ElementRef) {
    this.element = el;
  }

  @HostListener('keyup', ['$event']) keyup(e) {
    if (this.element.nativeElement.value > 100) {
    this.element.nativeElement.style.background = 'red';
    }
  }
}
