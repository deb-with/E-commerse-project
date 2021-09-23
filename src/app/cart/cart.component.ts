import { Component, OnInit } from '@angular/core';
import { HomePagedata } from '../database';
import { VegetablesPagedata } from '../database';
import { GroceryPagedata } from '../database';
import { FruitsPagedata } from '../database';
// interface Product{
//   pId:string;
//   pName:string;
//   pImage:string;
//   pPrice:number;
//   pQty:number;
// }
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 /* public products:Product[]=[
    {
      pId:`a101`,
      pName:`ddd`,
      pImage:`https://via.placeholder.com/200x200`,
      pPrice:120,
      pQty:2
    },
    {
      pId:`a102`,
      pName:`ddd`,
      pImage:`https://via.placeholder.com/200x200`,
      pPrice:120,
      pQty:2
    },
    {
      pId:`a103`,
      pName:`ddd`,
      pImage:`https://via.placeholder.com/200x200`,
      pPrice:120,
      pQty:2
    },
    {
      pId:`a104`,
      pName:`ddd`,
      pImage:`https://via.placeholder.com/200x200`,
      pPrice:120,
      pQty:2
    }
  ];
  public incrpQty(productId:string):void{
    this.products= this.products.map((product :Product)=>{
      if(product.pId===productId){
        return{
          ...product,
          pQty:product.pQty+1
        }
      }
      return product;
    })
  }
  public dcrpQty(productId:string):void{
    this.products= this.products.map((product :Product)=>{
      if(product.pId===productId){
        return{
          ...product,
          pQty:product.pQty -1 >0 ? product.pQty-1:1
        }
      }
      return product;
    })
  }
  public calcGrandTotal():number{
    let total:number=0;
    for(let product of this.products){
      total+=(product.pQty * product.pPrice);
    }
    return total;
  }
  */

  // public removeCartItem:any{
  //   let total:number=0;
    
  //   return total;
  // }
//  public removeItem():any{
//    localStorage.removeItem("homePagedata");
//  }
  // for home page
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
    if(typeof cartData !== 'undefined' && cartData != null) {
      let cartDataObj = JSON.parse(cartData);
      if(cartDataObj != null) {
        for(let item of VegetablesPagedata.vegetables) {
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
        for(let item of GroceryPagedata.grocery) {
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
        for(let item of FruitsPagedata.fruits) {
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
