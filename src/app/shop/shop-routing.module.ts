import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';
import { ShoesComponent } from '../shoe/container/shoes/shoes.component';

const routes: Routes = [
  {
    path: 'shop', component: ShopComponent, children: [
      { path: 'shoes', component: ShoesComponent },
      { path: 'details', loadChildren: '../shoe/shoe.module#ShoeModule' },
      { path: '', redirectTo: 'shoes', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
