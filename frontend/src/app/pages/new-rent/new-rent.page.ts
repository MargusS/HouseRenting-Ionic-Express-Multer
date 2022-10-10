import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { House } from 'src/app/models/house';
import { HouseService } from 'src/app/service/house.service';
import { Camera, CameraResultType, CameraSource} from '@capacitor/camera';
import { FormsModule } from '@angular/forms';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectFade } from 'swiper';
import { IonicSlides } from '@ionic/angular';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides,EffectFade]);

@Component({
  selector: 'app-new-rent',
  templateUrl: './new-rent.page.html',
  styleUrls: ['./new-rent.page.scss'],
})
export class NewRentPage implements OnInit {

  title: string = '';
  location: string = '';
  price: string = '';
  description: string = '';
  wc: string = '';
  rooms: string = ''; 

  toastColor:string;
  images: any[] = [];
  imagesLength:number = 0;
  constructor(private router: Router,private toastController: ToastController,private houseService: HouseService) { }

  ngOnInit() {
  }

  async onCreate(){
    const house = new House(this.title,this.location,this.price,this.description,this.wc,this.rooms);
    let blob = [];
    for (let i of this.images){
      const response = await fetch(i);
      blob.push(await response.blob());
    }
    // console.log(blob[0]);
    this.houseService.postCreate(house,blob).subscribe(
      data => {
        this.toastColor = 'success'
        this.presentToast(data.message);
        this.router.navigate(['/admin']);
      },
      err => {
        this.toastColor = 'danger'
        this.presentToast(err.error.message);
      }
    )
  }
  
  public async pickImage(){
    // Take a photo
    const capturedPhotos = await Camera.pickImages({
      limit: 5,
      quality: 100
    });
    for(let img of capturedPhotos.photos){
      this.images = this.images.concat(img.webPath);
    }
    this.imagesLength = this.images.length;
  }

  public async takePhoto() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    console.log(capturedPhoto);
    return capturedPhoto;
  }

  discardImage(image){
    const filter = this.images.filter(item=> item != image);
    this.images = filter;
    this.imagesLength = this.images.length;
  }

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      position: 'bottom',
      color: this.toastColor,
      icon:"alert-circle-outline",
      animated: true
    });
    toast.present();
  }

}
