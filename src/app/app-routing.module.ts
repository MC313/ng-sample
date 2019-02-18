import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
    { path: 'shop', component: ShopComponent },
    { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutModule' },
    { path: '', redirectTo: 'shop', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
