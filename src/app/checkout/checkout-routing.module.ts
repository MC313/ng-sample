import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { ShippingComponent } from './shipping/shipping.component';
import { BillingComponent } from './billing/billing.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  {
    path: '', component: CheckoutComponent, children: [
      { path: 'shipping', component: ShippingComponent },
      { path: 'billing', component: BillingComponent },
      { path: 'confirmation', component: ConfirmationComponent },
      { path: '', redirectTo: 'shipping', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
