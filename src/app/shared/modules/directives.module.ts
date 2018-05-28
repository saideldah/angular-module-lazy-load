import { NgModule } from '@angular/core';
import { TestDirective } from '../directives/test.directive';

@NgModule({
  declarations: [
    TestDirective,
  ],
  exports: [
    TestDirective,
  ]
})
export class DirectivesModule { }
