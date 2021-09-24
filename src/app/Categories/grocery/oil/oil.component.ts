import { Component, OnInit } from '@angular/core';
import { OilPagedata as op } from 'src/app/database';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-oil',
  templateUrl: './oil.component.html',
  styleUrls: ['./oil.component.css']
})
export class OilComponent implements OnInit {
  public oilPagedata:any={};
  constructor(private _cartservice:CartService) {
    this.oilPagedata=op;
   }
  ngOnInit(): void {
  }
  addtocart(prodId : string){

    this._cartservice.setCart(prodId);
  }
}
