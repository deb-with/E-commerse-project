import { Component, OnInit } from '@angular/core';
import { HomePagedata } from '../database';
import { VegetablesPagedata } from '../database';
import { GroceryPagedata } from '../database';
import { FruitsPagedata } from '../database';
import { OnionPagedata,ChiliPagedata,PotatoPagedata,OilPagedata,RicePagedata,SugarPagedata,
  ApplePagedata,BananasPagedata,MangoPagedata } from '../database';
import { Title } from '@angular/platform-browser';
// import { VegetablesComponent } from '../Categories/vegetables/vegetables.component';
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
  public homePagedata: any = [];
 /* public products:Product[]=[
    {
      pId:`a101`,
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
  
  singleProductDelete(data:any){
    console.log(data.id);
    if(localStorage.getItem('cartItem')){
      // this.homePagedata = JSON.parse(localStorage.getItem('cartItem') as any);
      for(let i=0; i<this.homePagedata.length;i++){
          if(this.homePagedata[i].id ===data){
            this.homePagedata.splice(i, 1);
            localStorage.setItem('cartItem',JSON.stringify(this.homePagedata));
          }
      }
    }
  }
  public incrpQty(id:any, pQty:any){
    for(let i=0; i<this.homePagedata.length;i++){
      if(this.homePagedata[i].id===id){
        if(pQty !=5){
          this.homePagedata[i].pQty = parseInt(pQty) + 1 ;
        }
      }
    }
    localStorage.setItem('cartItem',JSON.stringify(this.homePagedata));
    this.calcTotal();
  }
  public dcrpQty(id:any, pQty:any){
    for(let i=0; i<this.homePagedata.length;i++){
      if(this.homePagedata[i].id===id){
        if(pQty !=1){
          this.homePagedata[i].pQty = parseInt(pQty) - 1 ;
        }
      }
    }
    localStorage.setItem('cartItem',JSON.stringify(this.homePagedata));
    this.calcTotal();
  }
  total:number=0;
  calcTotal(){
    if(localStorage.getItem('cartItem')){
      // this.homePagedata=JSON.parse(localStorage.getItem('cartItem') as string);
      this.total = this.homePagedata.reduce(function(acc:any,val:any){
        return acc + (val.pPrice * val.pQty);
      },0 );
    }
  }
  
  // for home page
  
 
  constructor(private _title: Title ) { 
    this._title.setTitle('Cart Page');
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
    if(typeof cartData !== 'undefined' && cartData != null) {
      let cartDataObj = JSON.parse(cartData);
      if(cartDataObj != null) {
        for(let item of OnionPagedata.onion) {
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
        for(let item of ChiliPagedata.chili) {
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
        for(let item of PotatoPagedata.potato) {
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
        for(let item of OilPagedata.oil) {
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
        for(let item of RicePagedata.rice) {
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
        for(let item of SugarPagedata.sugar) {
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
        for(let item of ApplePagedata.apple) {
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
        for(let item of BananasPagedata.bananas) {
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
        for(let item of MangoPagedata.mango) {
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
    // this.homePagedata();
    this.calcTotal();
  }
}
