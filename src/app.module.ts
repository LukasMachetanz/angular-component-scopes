import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OneModule } from './one/one.module';
import { TwoModule } from './two/two.module';
import { SpanHighlighterDirective } from './span-highlighter.directive';
import { AppContainerComponent } from './app-container/app-container.component';
import { StandaloneOneComponent } from './standalone-one/standalone-one.component';
import { StandaloneTwoComponent } from './standalone-two/standalone-two.component';
import { SpecialFormsModule } from './special-forms.module';

@NgModule({
  imports: [
    BrowserModule,
    OneModule,
    TwoModule,
    StandaloneOneComponent,
    StandaloneTwoComponent,
    // SpecialFormsModule,
  ],
  // SpanHighlighterDirective
  declarations: [AppComponent, AppContainerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
