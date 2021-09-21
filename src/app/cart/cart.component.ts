import { Component, OnInit } from '@angular/core';
import { HomePagedata } from '../database';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public homePagedata: any = [];

  constructor() { 
    let cartData = localStorage.getItem('cartItem');
    if(typeof cartData !== 'undefined' && cartData != null) {
      let cartDataObj = JSON.parse(cartData);
      if(cartDataObj != null) {
        for(let item of HomePagedata.seasonOffers) {
          for(let cartItem of cartDataObj) {
            if(item.id == cartItem) {
              this.homePagedata.push(item);
            }
          }
        }
      }
    }
    if(typeof cartData !== 'undefined' && cartData != null) {
      let cartDataObj = JSON.parse(cartData);
      if(cartDataObj != null) {
        for(let item of HomePagedata.topOffers) {
          for(let cartItem of cartDataObj) {
            if(item.id == cartItem) {
              this.homePagedata.push(item);
            }
          }
        }
      }
    }
    if(typeof cartData !== 'undefined' && cartData != null) {
      let cartDataObj = JSON.parse(cartData);
      if(cartDataObj != null) {
        for(let item of HomePagedata.bestOffers) {
          for(let cartItem of cartDataObj) {
            if(item.id == cartItem) {
              this.homePagedata.push(item);
            }
          }
        }
      }
    }
    else {
      this.homePagedata = [];
    }
  }

  ngOnInit(): void {
  }

}
