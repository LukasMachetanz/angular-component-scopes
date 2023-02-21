import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpanHighlighterDirective } from './span-highlighter.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SpanHighlighterDirective],
  exports: [SpanHighlighterDirective],
})
export class SpecialFormsModule {}
