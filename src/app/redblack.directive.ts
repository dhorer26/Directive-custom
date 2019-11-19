import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedblack]'
})
export class RedblackDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.background = 'black';
    el.nativeElement.style.color = 'white';
    el.nativeElement.innerText += 'new text';
  }
}
