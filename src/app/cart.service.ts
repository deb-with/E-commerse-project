import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  setCart(prodId:any){

    let cartdata=localStorage.getItem("cartItem");
   
    if (typeof cartdata !== "undefined" && cartdata != null) {
     let cartdataObj=JSON.parse(cartdata);
      if(cartdataObj != null && cartdataObj.indexOf(prodId)<0){
        cartdataObj.push(prodId)
        localStorage.setItem("cartItem",JSON.stringify(cartdataObj))
      }
    } else {
      let cartdataObj = [prodId];
      localStorage.setItem("cartItem",JSON.stringify(cartdataObj))
    }

  }
}
