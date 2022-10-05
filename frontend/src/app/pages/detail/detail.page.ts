import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { House } from '../models/house';
// import { HouseService } from '../service/house.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  // house: House = null;
  constructor(private activatedRoute:ActivatedRoute,private router: Router) { }

  ngOnInit() {
    // const id = this.activatedRoute.snapshot.params.id;
    // this.houseService.getDetail(id).subscribe(
    //   data=>{
    //     this.house = data;
    //   },
    //   err=>{
    //     alert("Error");
    //   }
    // )
  }

}
