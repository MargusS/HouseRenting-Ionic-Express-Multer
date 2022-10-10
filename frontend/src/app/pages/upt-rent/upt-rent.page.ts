import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { House } from 'src/app/models/house';
import { HouseService } from 'src/app/service/house.service';
import { Camera, CameraResultType, CameraSource} from '@capacitor/camera';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectFade } from 'swiper';
import { IonicSlides } from '@ionic/angular';
import { ImagesService } from 'src/app/service/images.service';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides,EffectFade]);

@Component({
  selector: 'app-upt-rent',
  templateUrl: './upt-rent.page.html',
  styleUrls: ['./upt-rent.page.scss'],
})
export class UptRentPage implements OnInit {

  house: House = null;
  images:any = [];
  imagesLength:number = 0;
  newImages: any = [];
  imgUpdate: any;
  toastColor:string;
  id = this.activatedRoute.snapshot.params.id;

  constructor(private activatedRoute:ActivatedRoute,private router: Router,private toastController: ToastController, private houseService: HouseService, private imagesService: ImagesService) { }

  ngOnInit() {
    this.getDetail();
    this.getGallery();
  }

  ionViewWillEnter() {
    this.getDetail();
    this.getGallery();
  }

  onUpdate():void{
    this.houseService.putUpdate(this.id,this.house).subscribe(
      data=>{
        this.toastColor = 'success'
        this.presentToast(data.message);
        this.router.navigate(['/admin']);
      },
      err=>{
        this.toastColor = 'danger'
        this.presentToast(err.error.message);
      }
    )
  }

  getDetail(){
    const id = this.activatedRoute.snapshot.params.id;
    this.houseService.getDetail(this.id).subscribe(
      data=>{
        this.house = data;
      },
      err=>{
        alert("Error");
      }
    )
  }

  getGallery(){
    this.imagesService.getGallery(this.id).subscribe(
      response => {
        this.images = response;
      }
    )
    this.imagesLength = this.images.length;
  }

  discardImage(id){
    this.imagesService.deleteImage(id).subscribe(
    data=>{
      this.toastColor = 'success'
      this.presentToast(data.message);
      this.getGallery();
    },
    err=>{
      this.toastColor = 'danger'
      this.presentToast(err.error.message);
    })

  }

public async takePhoto(aux: number, id){
  if(aux === 0){
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    this.imgUpdate = capturedPhoto.webPath;
    let blob = null;
    const response = await fetch(this.imgUpdate)
    blob = await response.blob()
    this.updateImage(id,blob);
  }
  if(aux === 1){
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    this.newImages.push(capturedPhoto.webPath);
    this.createImage();
  }
}

  public async pickImage(aux: number, id){
    
    if(aux === 0){
      const capturedPhoto = await Camera.pickImages({
        limit: 1,
        quality: 100
      });
      this.imgUpdate = capturedPhoto.photos[0].webPath;
      let blob = null;
      const response = await fetch(this.imgUpdate)
      blob = await response.blob()
      this.updateImage(id,blob);
    }
    
    if(aux === 1){
      const capturedPhotos = await Camera.pickImages({
        limit: 3,
        quality: 100
      });
      for(let img of capturedPhotos.photos){
        this.newImages = this.newImages.concat(img.webPath);
      }
      this.createImage();
    }
  }

   async createImage(){
    let blob = [];
    for (let i of this.newImages){
      const response = await fetch(i);
      blob.push(await response.blob());
    }
    this.imagesService.postCreateImage(this.id,blob).subscribe(
      data=>{
        this.toastColor = 'success'
        this.presentToast(data.message);
        this.getGallery();
      },
      err=>{
        this.toastColor = 'danger'
        this.presentToast(err.error.message);
      }
    )
  }

   async updateImage(id,blob){
    this.imagesService.putUpdate(id,blob).subscribe(
      data=>{
        this.toastColor = 'success'
        this.presentToast(data.message);
        this.getGallery();
      },
      err=>{
        this.toastColor = 'danger'
        this.presentToast(err.error.message);
      }
    )
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

