import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective implements OnInit {

  constructor(public el: ElementRef) {
    this.el.nativeElement.style.fontSize = '50px';
    this.el.nativeElement.style.color = 'green';
}

ngOnInit() {
  }

// Whithout $event
// @HostListener('click') click($event) {
//   console.log($event);
//   this.el.nativeElement.style.fontSize = '30px';
//   this.el.nativeElement.style.color = 'red';
// }

// With $event

@HostListener('click', ['$event']) 
hello($event) {
  // console.log($event);

  this.el.nativeElement.style.fontSize = '30px';
    this.el.nativeElement.style.color = 'red';
}

@HostListener('dblclick') dblclick() {
  this.el.nativeElement.style.fontSize = '';
  this.el.nativeElement.style.color = '';
 }

}
