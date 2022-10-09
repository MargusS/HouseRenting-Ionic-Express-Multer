import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HouseService } from 'src/app/service/house.service';
import { ImagesService } from 'src/app/service/images.service';
// import { HouseService } from '../service/house.service';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.page.html',
  styleUrls: ['./houses-list.page.scss'],
})
export class HousesListPage implements OnInit {

  houses: any = [];
  constructor(private router: Router, private houseService: HouseService, private imagesService : ImagesService) { }

  ngOnInit() {
    this.getAllHouses();
  }

  ionViewWillEnter() {
    this.getAllHouses();
  }

  getAllHouses() {
    this.houseService.getHouses().subscribe(response => {
      this.houses = response;
      this.houses.map(h => this.imagesService.getMainImage(h.id).subscribe(
        response => {
          h.image = response;
          h.image = h.image.imgfile;
        }
      ));
    })
  }
}