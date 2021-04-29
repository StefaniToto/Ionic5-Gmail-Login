import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { GlobalProvider } from 'src/app/providers/global.provider';


declare let SMS1: any;
@Component({
  selector: 'app-mobile-verify',
  templateUrl: './mobile-verify.component.html',
  styleUrls: ['./mobile-verify.component.scss'],
})
export class MobileVerifyComponent implements OnInit {
  registrationForm: FormGroup;
  showValidation = false;
  showValidationMSG = false;

  constructor(
    private toastCtrl: ToastController,
    public formBuilder: FormBuilder,
    private globalProvider: GlobalProvider,
    private router: Router,

  ) {
    this.registrationForm = formBuilder.group({
      firstName: [
        '',
        Validators.compose([
          Validators.maxLength(10),
          Validators.pattern('[a-zA-Z ]*'),
          Validators.required,
        ]),
      ],
      email: ['', Validators.compose([Validators.required])],
      password: [
        '',
        Validators.compose([
          Validators.maxLength(30),
          Validators.pattern('[a-zA-Z ]*'),
          Validators.required,
        ]),
      ],
    });
  }

  async presentToast(message, showButton, position, duration) {
    const toast = await this.toastCtrl.create({
      message,
      position,
      duration,
    });
    toast.present();
  }



  ngOnInit() {
    this.registrationForm.valueChanges.subscribe((form) => {
      if (form.email) {
        if (this.globalProvider.checkEmail(form.email)) {
          this.showValidationMSG = false;
          console.log('ifff', form);
          this.showValidation = true;
        } else {
          this.showValidationMSG = true;
          this.showValidation = false;
          console.log('sssselseeessssss', form);
        }
      }
    });
  }

  closeModal() {}
}
