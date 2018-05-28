import { NgModule, ModuleWithProviders } from '@angular/core';
import { ComponentsModule, ServicesModule, DirectivesModule, PipesModule } from './modules';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  exports: [
    ComponentsModule,
    DirectivesModule,
    PipesModule,
    ToastrModule,
  ],
  declarations: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: ServicesModule.forShared()
    };
  }
}
