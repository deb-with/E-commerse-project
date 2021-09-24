import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ChiliPagedata as cp } from 'src/app/database';
@Component({
  selector: 'app-chili',
  templateUrl: './chili.component.html',
  styleUrls: ['./chili.component.css']
})
export class ChiliComponent implements OnInit {
public chiliPagedata:any={};
  constructor(private _cartservice:CartService) {
    this.chiliPagedata=cp;
   }

  ngOnInit(): void {
  }
  addtocart(prodId : string){

    this._cartservice.setCart(prodId);
  }

}
