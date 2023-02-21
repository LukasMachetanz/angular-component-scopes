import { Component, forwardRef } from '@angular/core';
import {
  FormBuilder,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { QuickInfoDirective } from '../quick-info.directive';

@Component({
  selector: 'app-child-control',
  templateUrl: './child-control.component.html',
  styleUrls: ['./child-control.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, QuickInfoDirective],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChildControlComponent),
      multi: true,
    },
  ],
})
export class ChildControlComponent {
  protected readonly form = this.formBuilder.group({
    myControl: '',
  });

  constructor(private readonly formBuilder: FormBuilder) {}

  public writeValue(obj: any): void {}
  public registerOnChange(fn: any): void {}
  public registerOnTouched(fn: any): void {}
}
