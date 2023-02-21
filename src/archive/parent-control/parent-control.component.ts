import { Component, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { ChildControlComponent } from '../child-control/child-control.component';

@Component({
  selector: 'app-parent-control',
  templateUrl: './parent-control.component.html',
  styleUrls: ['./parent-control.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, ChildControlComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ParentControlComponent),
      multi: true,
    },
  ],
})
export class ParentControlComponent implements ControlValueAccessor {
  protected readonly form = this.formBuilder.group({
    childControl: '',
  });

  constructor(private readonly formBuilder: FormBuilder) {}

  public writeValue(obj: any): void {}
  public registerOnChange(fn: any): void {}
  public registerOnTouched(fn: any): void {}
}
