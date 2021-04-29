/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  ModalController,
  PopoverController,
} from '@ionic/angular';

import { LoginForgetComponent } from '../login-forget/login-forget.component';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
@Component({
  selector: 'app-login-main-screen',
  templateUrl: './login-main-screen.page.html',
  styleUrls: ['./login-main-screen.page.scss'],
})
export class LoginMainScreenPage implements OnInit {
  userData: any = {};
  loggedIn: boolean;

  constructor(
    // private authService: SocialAuthService,
    public popoverController: PopoverController,
    public loadingController: LoadingController,
    private router: Router,
    public alertController: AlertController,
    private modalController: ModalController,
     private googlePlus: GooglePlus,
  ) {

 
  }

  ngOnInit() {


  }

  async connectWithGoogle() {

  
    this.googlePlus
      .login({})
      .then((result) => {
        this.presentAlert(result);
        console.log('ssssssssssssssssssssss', result);       
            this.presentAlert('welcome Google User')
            this.router.navigate(['/tabs/tab1']);
      })
      .catch((err) => {
        this.presentAlert(err),
          (this.userData = `Error ${JSON.stringify(err)}`);
      });

 
  }
 

  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentLoading(loading) {
    return await loading.present();
  }

  async connectWithMobile() { 

    const myModal = await this.modalController.create({
      component: LoginForgetComponent,
      cssClass: 'my-modal-mobile',
    });
    return await myModal.present();
  }

  

  connectWithEmail(ev) {
    this.router.navigate(['mobile-verufy']);


  }

  connectWithIphone() {}


}
