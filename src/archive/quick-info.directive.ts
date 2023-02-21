import { Directive, Optional } from '@angular/core';
import { FormGroupDirective, NgControl } from '@angular/forms';

@Directive({
  selector: '[appQuickInfo]',
  standalone: true,
  exportAs: 'appQuickInfo',
})
export class QuickInfoDirective {
  constructor(
    private readonly ngControl: NgControl,
    @Optional() private readonly formGroup: FormGroupDirective | null
  ) {}

  public onShowInfo(): void {
    console.log(this.ngControl);
    console.log(this.formGroup);
  }
}
