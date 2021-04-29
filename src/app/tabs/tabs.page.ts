import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  pages: any = [
    // { title: 'Main Menu', path: '', icon: "../assets/imgs/love-cross.svg" },
    { title: 'Go Premium', path: 'koash', icon: '../assets/imgs/cross.svg' },
    { title: 'Who checked m?', path: 'services', icon: './assets/imgs/service.svg' },
    { title: "Favourites", path: 'shows', icon: './assets/imgs/show.svg' },
    { title: "Find User", path: 'reading', icon: 'book-outline' },
    { title: 'Safety', path: 'about-us', icon: 'information-circle-outline' },
    { title: "Feedback!", path: 'shows', icon: './assets/imgs/show.svg' },
    { title: "Settings", path: 'reading', icon: 'book-outline' },
    { title: 'Logout', path: 'about-us', icon: 'information-circle-outline' },
  ];
  arrow_right: string = 'arrow-back-outline';
  constructor(private menu: MenuController,
    private router: Router,
    private navCtrl: NavController) { }


    openFirst() {
      this.menu.enable(true, 'first');
      this.menu.open('first');
    } 



  closeMenu(){
    console.log('aaaaaaaaa')
    this.menu.close() 
  }

  donate(){
    this.router.navigate(['donate']);
  }


}
