import { Directive, HostListener, HostBinding, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') openStyle:boolean = false;

  constructor(private element: ElementRef , private renderer: Renderer2) { }

  ngOnInit() {
  }

  // attach open css class when clicked
  // remove open css class when clicked again
  @HostListener('click') clicked(eventData: Event) {
    this.openStyle = !this.openStyle;
  }
}
