import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @Input() title;
  arrow_right: string = 'arrow-back-outline';
  openMenu : boolean = false;
  setclassName: string;
 
  constructor(   private menu: MenuController,
   ) { }

  ngOnInit() {
    console.log('mennu', this.menu)
  }

  closeMenu(){
    console.log('closeMenu')
    this.menu.close() 
  }

  openFirst() {
    this.openMenu = !this.openMenu;
    this.menu.enable(true);
    this.menu.open();
    console.log('   this.menu.open();',   this.menu.open())
  } 

}
