import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomePagedata,FruitsPagedata,GroceryPagedata, VegetablesPagedata } from '../database';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
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

  ngOnInit(): void {
  }

    
}
