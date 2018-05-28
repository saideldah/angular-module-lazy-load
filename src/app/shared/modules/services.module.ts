import { NgModule, Provider } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { toastrConfig } from '../configs';

@NgModule({
})
export class ServicesModule {
  static forShared(): Provider[] {
    return [
      ...ToastrModule.forRoot(toastrConfig).providers,
    ];
  }
}
