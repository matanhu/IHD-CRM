import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ihdContactTooltip]'
})
export class ContactTooltipDirective {

  constructor(private myElement: ElementRef) {
    // myElement.nativeElement.style.setProperty('display', '');
  }

}
