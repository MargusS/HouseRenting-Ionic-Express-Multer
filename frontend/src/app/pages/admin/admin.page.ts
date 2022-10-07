import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HouseService } from 'src/app/service/house.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  houses: any = [];
  toastColor:string;

  constructor(private router: Router,private toastController: ToastController, private houseService: HouseService) { }

  ngOnInit() {
    this.getAllHouses();
  }

  ionViewWillEnter() {
    this.getAllHouses();
  }

  getAllHouses(): void {
    this.houseService.getHouses().subscribe(response => {
      this.houses = response;
    })
  }

  goToNew(): void {
    this.router.navigateByUrl("/new-rent");
  }

  deleteItem(id: number): void {
    this.houseService.deleteHouse(id).subscribe(
      data => {
        this.toastColor = 'success'
        this.presentToast(data.message);
        this.getAllHouses();
      },
      err => {
        this.toastColor = 'danger'
        this.presentToast(err.error.message);
        this.getAllHouses();
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
