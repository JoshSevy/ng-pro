import { Directive, ElementRef, Input, OnInit, ViewContainerRef } from "@angular/core";

@Directive({

})
export class TooltipDirective implements OnInit {
  tooltipElement = document.createElement('div');
  visible = false;

  @Input()
  set tooltip(value) {
    this.tooltipElement.textContent = value;
  }

  hide() {
    this.tooltipElement.classList.remove('tooltip--active');
  }

  show() {
    this.tooltipElement.classList.add('tooltip--active');
  }

    constructor(
      private element: ElementRef,
      private view: ViewContainerRef
    ) { }

    ngOnInit() {
      this.tooltipElement.className = 'tooptip';
      this.element.nativeElement.appendChild(this.tooltipElement);
      this.element.nativeElement.classList.add('tooltip-container');
     }
}
