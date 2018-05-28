import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { TestComponent } from '../components/test/test.component';

@NgModule({
  imports: [
    // in order for shared components to make use of
    CommonModule,
    MaterialModule,
    // DirectivesModule,
    // PipesModule,
  ],
  declarations: [
    TestComponent,
  ],
  exports: [
    // in order for other modules components to make use of
    CommonModule,
    MaterialModule,
    TestComponent,
    // DirectivesModule,
    // PipesModule,
  ]
})
export class ComponentsModule { }
