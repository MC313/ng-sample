import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'shop',
    templateUrl: 'shop.component.html'
})

export class ShopComponent implements OnInit {
    constructor() { }
    animateShoesContainer: boolean = false;

    ngOnInit() { }

    showHideCartProducts($event) {
        this.animateShoesContainer = this.animateShoesContainer === false ? true : false;
    }
}