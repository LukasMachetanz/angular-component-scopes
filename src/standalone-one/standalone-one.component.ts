import { Component } from '@angular/core';
import { SpecialFormsModule } from '../special-forms.module';
import { StandaloneChildComponent } from '../standalone-child/standalone-child.component';

@Component({
  selector: 'app-standalone-one',
  templateUrl: './standalone-one.component.html',
  styleUrls: ['./standalone-one.component.css'],
  standalone: true,
  imports: [SpecialFormsModule, StandaloneChildComponent],
})
export class StandaloneOneComponent {}
