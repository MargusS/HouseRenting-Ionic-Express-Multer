import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { HouseService } from '../service/house.service';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.page.html',
  styleUrls: ['./houses-list.page.scss'],
})
export class HousesListPage implements OnInit {

  houses: any = [];
  constructor(private router: Router) { }

  ngOnInit() {
    // this.getAllHouses();
  }

  ionViewWillEnter() {
    // this.getAllHouses();
  }

  // getAllHouses() {
  //   this.houseService.getHouses().subscribe(response => {
  //     this.houses = response;
  //   },
  //   err =>{
  //     this.router.navigate(['/']);
  //   })
  // }

}