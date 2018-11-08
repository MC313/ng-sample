import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-total-price',
    templateUrl: 'total-price.component.html'
})

export class TotalPriceComponent implements OnInit {

    @Input() totalPrice: number;

    constructor() { }

    ngOnInit() { }
}