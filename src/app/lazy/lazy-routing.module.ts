import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './lazy/lazy.component';

const routes: Routes = [
  {
    path: '',
    component: LazyComponent
  },
  {
    path: ':id',
    loadChildren: './details/details.module#DetailsModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
