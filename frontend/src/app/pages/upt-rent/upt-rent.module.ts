import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UptRentPageRoutingModule } from './upt-rent-routing.module';

import { UptRentPage } from './upt-rent.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UptRentPageRoutingModule,
    ComponentsModule,
    SwiperModule
  ],
  declarations: [UptRentPage]
})
export class UptRentPageModule {}
