import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () =>
          import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../pages/home/home.module').then((m) => m.HomePageModule),
      },
      // {
      //   path: "app-profile",
      //   loadChildren: () =>
      //     import("../pages/profile/profile.module").then(
      //       (m) => m.ProfilePageModule
      //     ),
      // },
      // {
      //   path: "filters-page",
      //   loadChildren: () =>
      //     import("../pages/filters-page/filters-page.module").then(
      //       (m) => m.FiltersPagePageModule
      //     ),
      // },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
