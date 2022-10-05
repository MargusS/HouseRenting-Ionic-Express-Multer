import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AdminPage } from '../admin/admin.page';
// import { House } from '../models/house';
// import { HouseService } from '../service/house.service';

@Component({
  selector: 'app-upt-rent',
  templateUrl: './upt-rent.page.html',
  styleUrls: ['./upt-rent.page.scss'],
})
export class UptRentPage implements OnInit {

  // house: House = null;
  toastColor:string;

  constructor(private activatedRoute:ActivatedRoute,private router: Router,private toastController: ToastController) { }

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

  onUpdate():void{
    // const id = this.activatedRoute.snapshot.params.id;
    // this.houseService.putUpdate(id,this.house).subscribe(
    //   data=>{
    //     this.toastColor = 'success'
    //     this.presentToast(data.message);
    //     this.router.navigate(['/admin']);
    //   },
    //   err=>{
    //     this.toastColor = 'danger'
    //     this.presentToast(err.error.message);
    //   }
    // )
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

