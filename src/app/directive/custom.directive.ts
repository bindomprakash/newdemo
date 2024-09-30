import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el: ElementRef) { }

  ngOnInit(){
    this.el.nativeElement.style.color= "red"
  }
}
