import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx'; 
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pages: any = [
    // { title: 'Main Menu', path: '', icon: "../assets/imgs/love-cross.svg" },
    { title: 'Go Premium', path: 'koash', icon: '../assets/imgs/show.svg' },
    {
      title: 'Who checked me?',
      path: 'services',
      icon: './assets/imgs/service.svg',
    },
    { title: 'Favourites', path: 'shows', icon: './assets/imgs/show.svg' },
    { title: 'Find User', path: 'reading', icon: 'book-outline' },
    { title: 'Safety', path: 'about-us', icon: 'information-circle-outline' },
    { title: 'Feedback!', path: 'shows', icon: './assets/imgs/show.svg' },
    { title: 'Settings', path: 'reading', icon: 'book-outline' },
    { title: 'Logout', path: 'about-us', icon: 'information-circle-outline' },
  ];
  constructor(
    private platform: Platform,
     private splashScreen: SplashScreen,
     private statusBar: StatusBar
  ) {
   this.initializeApp();
  }

  openFirst() {}

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova') || this.platform.is('capacitor') ) {
        console.log('capacitor or cordova go on');
     
      }
      else{
        console.log('hooo capacitor', this.platform);
    
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


}
