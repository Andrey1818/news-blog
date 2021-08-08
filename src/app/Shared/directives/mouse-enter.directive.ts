import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

export interface Shadow {
  shadow: string,
  scale?: string
}

@Directive({
  selector: '[appMouseEnter]'
})
export class MouseEnterDirective {
  @Input('appMouseEnter') animate!: Shadow

  constructor(private elementRef: ElementRef, private render: Renderer2) {
  }

  @HostListener('mouseenter') onEnter() {
    this.render.setStyle(this.elementRef.nativeElement, 'box-shadow', this.animate.shadow)
    this.render.setStyle(this.elementRef.nativeElement, 'transition', 'box-shadow 0.5s')
    this.render.setStyle(this.elementRef.nativeElement, 'transform', this.animate.scale)
    this.render.setStyle(this.elementRef.nativeElement, 'transition', 'transform 0.5s')
  }


  @HostListener('mouseleave') onLeave() {
    this.render.setStyle(this.elementRef.nativeElement, 'box-shadow', null)
    this.render.setStyle(this.elementRef.nativeElement, 'transform', null)
  }

}
