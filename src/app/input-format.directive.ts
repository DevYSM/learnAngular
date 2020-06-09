import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[InputFormat]',
})
export class InputFormatDirective {
  constructor(private ref: ElementRef) {}

  @Input('format') format:string;

  @HostListener('focus') OnFocus() {
    console.log('focus');
  }

  @HostListener('blur') OnBlur() {
    let getValue: string = this.ref.nativeElement.value;
    if (this.format === 'uppercase') {
      this.ref.nativeElement.value = getValue.toUpperCase();
    } else if (this.format === 'lowercase') {
      this.ref.nativeElement.value = getValue.toLowerCase();
    } else {
      this.ref.nativeElement.value = getValue.toUpperCase();
    }
    // console.log('blur')
  }
}
