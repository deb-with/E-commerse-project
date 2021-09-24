import { Component, OnInit } from '@angular/core';
import { SugarPagedata as sp } from 'src/app/database';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-sugar',
  templateUrl: './sugar.component.html',
  styleUrls: ['./sugar.component.css']
})
export class SugarComponent implements OnInit {
  public sugarPagedata:any={};
  constructor(private _cartservice:CartService) {
    this.sugarPagedata=sp;
   }
  

  ngOnInit(): void {
  }
  addtocart(prodId : string){
    this._cartservice.setCart(prodId);
  }
}
