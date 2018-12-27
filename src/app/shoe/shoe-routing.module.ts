import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoeDetailsComponent } from './components/shoe-details/shoe-details.component';

const routes: Routes = [
    { path: '', component: ShoeDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoeRoutingModule { }
