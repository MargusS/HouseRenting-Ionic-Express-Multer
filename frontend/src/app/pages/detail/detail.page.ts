import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { House } from 'src/app/models/house';
import { HouseService } from 'src/app/service/house.service';
import { ImagesService } from 'src/app/service/images.service';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectFade } from 'swiper';
import { IonicSlides } from '@ionic/angular';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides,EffectFade]);

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  house: House = null;
  images;
  constructor(private activatedRoute:ActivatedRoute,private router: Router,private houseService: HouseService, private imagesService: ImagesService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.houseService.getDetail(id).subscribe(
      data=>{
        this.house = data;
      },
      err=>{
        alert("Error");
      }
    )

    this.imagesService.getGallery(id).subscribe(
      response => {
        this.images = response;
      }
    )
  }

}
