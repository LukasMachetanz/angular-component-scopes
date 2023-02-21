import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ParentControlComponent } from '../parent-control/parent-control.component';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, ParentControlComponent],
})
export class FormContainerComponent {
  protected readonly form = this.formBuilder.group({
    parentControl: '',
  });

  constructor(private readonly formBuilder: FormBuilder) {}
}
