import { Component, OnInit } from '@angular/core';
import { FruitsPagedata as fp } from 'src/app/database';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
public fruitsPagedata:any={};
  constructor(private _cartservice:CartService) { 
    this.fruitsPagedata=fp;
  }
  addtocart(prodId : string){
    this._cartservice.setCart(prodId);
  }
  ngOnInit(): void {
  }

}
