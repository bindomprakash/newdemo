import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appValid]'
})
export class ValidDirective {

  constructor(private el: ElementRef) { }

  @Input() 

  ngOnInit() {
    this.el.nativeElement.style.background = "yellow";
    this.el.nativeElement.style.background = "green";
    this.el.nativeElement.style.background = "pink";
  }
}
