import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  products = [
    {
      name: "Boat Rockerz 510",
      price: "1599",
      imageSrc: "../../../assets/prodImages/boat.png",
      quantity: 1
    },
    {
      name: "Alienware Gaming laptop",
      price: "354996",
      imageSrc: "../../../assets/prodImages/laptop.png",
      quantity: 1
    },
    {
      name: "Mi casual Backpack",
      price: "799 ",
      imageSrc: "../../../assets/prodImages/backpack.png",
      quantity: 1
    },
    {
      name: "Mi 12 pro",
      price: "75000",
      imageSrc: "../../../assets/prodImages/mi.png",
      quantity: 1
    },
    {
      name: "Skyware Gaming Desktop",
      price: "129000",
      imageSrc: "../../../assets/prodImages/pc.png",
      quantity: 1
    },
    {
      name: "Sony Home theater",
      price: "8099",
      imageSrc: "../../../assets/prodImages/sony.png",
      quantity: 1
    },
    {
      name: "Mi Powerbank",
      price: "1999",
      imageSrc: "../../../assets/prodImages/powerbank.png",
      quantity: 1
    },
    {
      name: "Phillips Trimmer",
      price: "1599",
      imageSrc: "../../../assets/prodImages/trimmer.png",
      quantity: 1
    },
    {
      name: "Mi 12 pro",
      price: "75000",
      imageSrc: "../../../assets/prodImages/mi.png",
      quantity: 1
    },
    {
      name: "Alienware Gaming laptop",
      price: "354996",
      imageSrc: "../../../assets/prodImages/laptop.png",
      quantity: 1
    },
    {
      name: "Boat Rockerz 510",
      price: "1599",
      imageSrc: "../../../assets/prodImages/boat.png",
      quantity: 1
    }
  ]

  list: any | undefined;
    @Output() elementFromChild = new EventEmitter<any>();

    sendToCart(event: any){
      // console.log(event.target.localName == "h3")
      if (event.target.localName == "h3"){
        let parent: any = event.target.parentElement;
        let data : any = {name:parent.getAttribute('data-name'), price: parent.getAttribute('data-price'), src: parent.getAttribute('data-src'), quantity:parent.getAttribute('data-quantity') }
        this.elementFromChild.emit(data)
      } else {
        let parent: any = event.target;
        let data : any = {name:parent.getAttribute('data-name'), price: parent.getAttribute('data-price'), src: parent.getAttribute('data-src'), quantity:parent.getAttribute('data-quantity') }
        this.elementFromChild.emit(data)
      }
    }
}
