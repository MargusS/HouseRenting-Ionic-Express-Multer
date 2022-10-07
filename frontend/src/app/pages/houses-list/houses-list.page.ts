import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HouseService } from 'src/app/service/house.service';
// import { HouseService } from '../service/house.service';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.page.html',
  styleUrls: ['./houses-list.page.scss'],
})
export class HousesListPage implements OnInit {

  houses: any = [];
  constructor(private router: Router, private houseService: HouseService) { }

  ngOnInit() {
    this.getAllHouses();
  }

  ionViewWillEnter() {
    this.getAllHouses();
  }

  getAllHouses() {
    this.houseService.getHouses().subscribe(response => {
      this.houses = response;
    },
    err =>{
      this.router.navigate(['/']);
    })
  }

}