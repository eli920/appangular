import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarpentryProducts } from './carpentry-products/carpentry-products';
import { CarpentryAbout } from './carpentry-about/carpentry-about';

// Ruteo
const routes: Routes = [
  {
     path: '',
     redirectTo: 'products',
     pathMatch: 'full',
  },

  {
    path: 'products',
    component: CarpentryProducts

  },

  {
    path: 'about',
    component: CarpentryAbout

  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
