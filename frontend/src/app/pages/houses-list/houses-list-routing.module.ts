import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HousesListPage } from './houses-list.page';

const routes: Routes = [
  {
    path: '',
    component: HousesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HousesListPageRoutingModule {}
