import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {

  cartValue:{name: string, price: string, src: string, quantity: number} [];
  products: {name: string, price: string, src: string, quantity: number} [];
  constructor(){
    this.products = [];
    this.cartValue = [];
  }

  captureElement(element: any){
    console.log('Element received in parent...............');
      this.products.push(element);
      this.cartValue = this.products;
      console.log(this.products);
  }
}
