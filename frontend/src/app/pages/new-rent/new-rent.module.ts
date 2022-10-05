import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewRentPageRoutingModule } from './new-rent-routing.module';

import { NewRentPage } from './new-rent.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewRentPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NewRentPage]
})
export class NewRentPageModule {}
