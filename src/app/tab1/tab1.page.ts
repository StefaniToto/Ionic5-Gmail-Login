import { DatePipe } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [DatePipe],
})
export class Tab1Page {
  title_header: string = 'Home';
  mode: string = '0';
  page: number = 1;
  perPage: number = 5;
  textZeroResults: string;
  zeroAdvertising: boolean;
  autenticato: boolean;
  showShops: boolean;
  id_city_selezionata: number;
  spinner_MA: boolean;
  is_refresher: boolean;
  showSearchBar: any;
  searchTerm: any;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  showBtn: boolean;
  snackBar: any;
  subScripion: Subscription;

  items = [
    [
      { src: '../assets/people/p1.jpeg', imgHeight: 100, name: 'Andrea, 27' },
      { src: '../assets/people/p2.jpeg', imgHeight: 100, name: 'Berta, 33' },
      { src: '../assets/people/p3.jpeg', imgHeight: 100, name: 'Angela, 22' },
      { src: '../assets/people/p4.jpeg', imgHeight: 100, name: 'Eli, 43' },
      { src: '../assets/people/p5.jpeg', imgHeight: 100, name: 'Ana, 35' },
      { src: '../assets/people/p6.jpeg', imgHeight: 100, name: 'Peter, 44' },
      { src: '../assets/people/p7.jpeg', imgHeight: 100, name: 'Athina, 43' },
      { src: '../assets/people/p1.jpeg', imgHeight: 100, name: 'Henry, 38' },
    ],
  ];
  myDate = new Date();
  constructor(
    private platform: Platform,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private menu: MenuController,
  ) {

  }

  ngOnInit() {
  
    this.datePipe.transform(this.myDate, 'yyyy-MM-dd hh-mm');
    // console.log('paramsss',   this.datePipe.transform(this.myDate, 'yyyy-MM-dd hh-mm'))

 
  }

  openMenu() {
    console.log('mennu', this.menu);
    this.menu.open();
  }

  clickSearchIcon() {
    if (this.showSearchBar) {
      this.showSearchBar = false;
    } else {
      this.showSearchBar = true;
    }
  }

  filterPage() {
    this.router.navigate(['/tabs/filters-page']);
  }

  itemHeightFn(item, index) {
    // better performance if setting item height
    return 215;
  }

  personSelected(i) {
    console.log('sssssssss', i);
    this.router.navigate(['user-info']);
  }
}
