import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerTwoComponent } from './container-two/container-two.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ContainerTwoComponent],
  exports: [ContainerTwoComponent],
})
export class TwoModule {}
