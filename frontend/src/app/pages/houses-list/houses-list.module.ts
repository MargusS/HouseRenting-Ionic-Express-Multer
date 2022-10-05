import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HousesListPageRoutingModule } from './houses-list-routing.module';

import { HousesListPage } from './houses-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HousesListPageRoutingModule
  ],
  declarations: [HousesListPage]
})
export class HousesListPageModule {}
