import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginMainScreenPageRoutingModule } from './login-main-screen-routing.module';
import { LoginMainScreenPage } from './login-main-screen.page';
import { MobileVerifyComponent } from '../components/mobile-verify/mobile-verify.component';
import { LoginForgetComponent } from '../login-forget/login-forget.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginMainScreenPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginMainScreenPage,          
    MobileVerifyComponent,
    LoginForgetComponent
   ],
  entryComponents: [       
    MobileVerifyComponent,
    LoginForgetComponent ],
    providers: [
      
    ]
})
export class LoginMainScreenPageModule {}
