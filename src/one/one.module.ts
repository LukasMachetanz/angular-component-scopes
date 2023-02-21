import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerOneComponent } from './container-one/container-one.component';
import { SpanHighlighterDirective } from '../span-highlighter.directive';

@NgModule({
  imports: [CommonModule],
  // SpanHighlighterDirective
  declarations: [ContainerOneComponent],
  exports: [ContainerOneComponent],
})
export class OneModule {}
