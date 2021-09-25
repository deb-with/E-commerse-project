import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomePagedata,FruitsPagedata,GroceryPagedata, 
  VegetablesPagedata,OnionPagedata,ChiliPagedata,
  PotatoPagedata,OilPagedata,RicePagedata,SugarPagedata,
  ApplePagedata,BananasPagedata,MangoPagedata } from '../database';
import { Title } from '@angular/platform-browser';

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

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router,private _title: Title ) {
    this._title.setTitle('Product-Details Page');
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
      if(flag==0){
        for(let data of OnionPagedata.onion){
          if(data.id == param.prodId) {
            this.pagedata = data;
            flag = 1;
            break;
          }
        }
      }
      if(flag==0){
        for(let data of ChiliPagedata.chili){
          if(data.id == param.prodId) {
            this.pagedata = data;
            flag = 1;
            break;
          }
        }
      }
      if(flag==0){
        for(let data of PotatoPagedata.potato){
          if(data.id == param.prodId) {
            this.pagedata = data;
            flag = 1;
            break;
          }
        }
      }
      if(flag==0){
        for(let data of OilPagedata.oil){
          if(data.id == param.prodId) {
            this.pagedata = data;
            flag = 1;
            break;
          }
        }
      }
      if(flag==0){
        for(let data of RicePagedata.rice){
          if(data.id == param.prodId) {
            this.pagedata = data;
            flag = 1;
            break;
          }
        }
      }
      if(flag==0){
        for(let data of SugarPagedata.sugar){
          if(data.id == param.prodId) {
            this.pagedata = data;
            flag = 1;
            break;
          }
        }
      }
      if(flag==0){
        for(let data of ApplePagedata.apple){
          if(data.id == param.prodId) {
            this.pagedata = data;
            flag = 1;
            break;
          }
        }
      }
      if(flag==0){
        for(let data of BananasPagedata.bananas){
          if(data.id == param.prodId) {
            this.pagedata = data;
            flag = 1;
            break;
          }
        }
      }
      if(flag==0){
        for(let data of MangoPagedata.mango){
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
