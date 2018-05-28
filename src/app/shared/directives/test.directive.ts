import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[earnedTest]'
})
export class TestDirective {

  constructor(
    private el: ElementRef
  ) {

  }

}
