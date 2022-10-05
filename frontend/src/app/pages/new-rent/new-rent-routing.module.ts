import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewRentPage } from './new-rent.page';

const routes: Routes = [
  {
    path: '',
    component: NewRentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewRentPageRoutingModule {}
