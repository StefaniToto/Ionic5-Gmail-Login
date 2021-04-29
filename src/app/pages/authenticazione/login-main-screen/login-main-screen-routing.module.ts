import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileVerifyComponent } from '../components/mobile-verify/mobile-verify.component';
import { LoginMainScreenPage } from './login-main-screen.page';

const routes: Routes = [
  {
    path: '',
    component: LoginMainScreenPage
  },
  {
    path: 'mobile-verufy',
    component: MobileVerifyComponent
  },
  // {
  //   path: 'register',
  //   component: FiltersSelectComponent
  // },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginMainScreenPageRoutingModule {}
