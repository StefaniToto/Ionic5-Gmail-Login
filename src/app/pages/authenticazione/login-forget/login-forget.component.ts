import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-forget',
  templateUrl: './login-forget.component.html',
  styleUrls: ['./login-forget.component.scss'],
})
export class LoginForgetComponent implements OnInit {
  avatarimage:any = 'assets/imgs/avatarleft.png';
  signform:any = 'login';
  flashCardFlipped: boolean = false;
  showOTPInput: boolean = false;
  selectedcurrency : any = '';
  OTP:any;
  email: any;
  OTPmessage:any;
  currencies = [
    { "name": "aud", "capital": "+30 Greece", "imagesrc": "assets/currency/aud.png" },
    { "name": "cad", "capital": "+1 Canada ", "imagesrc": "assets/currency/cad.png" },
    { "name": "chf", "capital": "+32 Swiss", "imagesrc": "assets/currency/chf.png" },
    { "name": "czk", "capital": "CZK", "imagesrc": "assets/currency/czk.png" },
    { "name": "dkk", "capital": "DKK", "imagesrc": "assets/currency/dkk.png" },
    { "name": "eur", "capital": "EUR", "imagesrc": "assets/currency/eur.png" },
    { "name": "nok", "capital": "NOK", "imagesrc": "assets/currency/nok.png" },
    { "name": "pln", "capital": "PLN", "imagesrc": "assets/currency/pln.png" },
    { "name": "rub", "capital": "RUB", "imagesrc": "assets/currency/rub.png" },
    { "name": "sek", "capital": "SEK", "imagesrc": "assets/currency/sek.png" },
    { "name": "usd", "capital": "USD", "imagesrc": "assets/currency/usd.png" }
  ];
  constructor() { }

  ngOnInit() {}

  next(){

  }

  register(){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login2Page');   
    this.signform = "login"
  }
  changeAvatar()
  {
    if(this.signform == 'login')
    {
      this.avatarimage = 'assets/imgs/avatarleft.png';
    }

    if(this.signform == 'signup')
    {
      this.avatarimage = 'assets/imgs/avatarright.png';
    }
  }

  loadcurrency() {
    setTimeout(() => {
      var radios = document.getElementsByClassName('alert-radio-label');
      for (let index = 0; index < radios.length; index++) {
        let singrad = radios[index];
        singrad.innerHTML = singrad.innerHTML.concat('<img src=' + this.currencies[index].imagesrc + ' style="width:30px; position:absolute; right:20px;"/>');
        (singrad as HTMLElement).style.fontSize = "22px";
        (singrad as HTMLElement).style.textTransform = "uppercase";
      }
    }, 200);
  }

}
