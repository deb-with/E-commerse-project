import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomePagedata,FruitsPagedata,GroceryPagedata, VegetablesPagedata } from '../database';
/*interface Product{
  pId:string;
  pName:string;
  pImage:string;
  pPrice:number;
  pQty:number;
}*/
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 /* public products:Product[]=[];
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
  }*/
  public pagedata: any={};

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) { 
    this._activatedRoute.params.subscribe(param => {
      let flag = 0;
      for(let data of HomePagedata.topOffers){
        if(data.id == param.prodId) {
          this.pagedata = data;
          flag = 1;
          break;
        }
      }
      if(flag==0){
        for(let data of HomePagedata.bestOffers){
          if(data.id == param.prodId) {
            this.pagedata = data;
            flag = 1;
            break;
          }
        }
      }
      if(flag==0){
        for(let data of HomePagedata.seasonOffers){
          if(data.id == param.prodId) {
            this.pagedata = data;
            flag = 1;
            break;
          }
        }
      }

      if(flag==0){
        for(let data of VegetablesPagedata.vegetables){
          if(data.id == param.prodId) {
            this.pagedata = data;
            flag = 1;
            break;
          }
        }
      }
      if(flag==0){
        for(let data of GroceryPagedata.grocery){
          if(data.id == param.prodId) {
            this.pagedata = data;
            flag = 1;
            break;
          }
        }
      }
      if(flag==0){
        for(let data of FruitsPagedata.fruits){
          if(data.id == param.prodId) {
            this.pagedata = data;
            flag = 1;
            break;
          }
        }
      }
      
       if (flag == 0){
         this._router.navigateByUrl('/404',{ skipLocationChange:true});
       }
      
    });
  }
ngOnInit():void {}
    
}
