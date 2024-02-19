import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el: ElementRef) {


  }

  ngOnInit(): void {

    var element = this.el.nativeElement;
    element.style.border = "1px solid black";
    element.style.borderRadius = "10px";
    element.style.padding = "20px";
    element.style.marginTop = "green";
    element.style.fontWeight = "bold";

    element.innerText = element.innerText.toUpperCase();
  }
}
