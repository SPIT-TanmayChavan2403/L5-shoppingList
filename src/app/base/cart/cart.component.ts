import { Renderer2, Component, Input, SimpleChanges, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CartComponent{
  
  @Input() items: {name: string, price: string, src: string, quantity: number} [];
  products: {name: string, price: string, src: string, quantity: number} [];

  constructor(){
    this.items = [];
    this.products = [];
  }
  
  ngOnChanges(changes: SimpleChanges){
    if (changes['items']){
        this.products = this.items;
    }
  }

  increaseQuantity(ele: any){
    console.log(ele);
    for(let i = 0; i < this.products.length; i++){
      let element = this.products[i];
      if (element.name === ele){
        element.quantity -=  1;
        element.quantity += 2;
        break;
      }
    }
  }

  removeItem(name: string){
    for (let i = 0; i < this.products.length; i++){
      const element = this.products[i];
      if (element.name === name){
        this.products.splice(i, 1);
      }
    }
  }

  decreaseQuantity(ele: any){
    for(let i = 0; i < this.products.length; i++){
      let element = this.products[i];

      if (element.name === ele){
        element.quantity = element.quantity - 1;
        if (element.quantity === 0){
          this.products.splice(i, 1);
        }
        break;
      }
    }
  }
  
  
  clearElements():void{
      this.products.splice(0,this.products.length);
  }



}
