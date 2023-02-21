import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'span',
})
export class SpanHighlighterDirective {
  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
  }
}
