import { Component, OnInit } from '@angular/core';
import { VegetablesPagedata as vp } from 'src/app/database';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {
public vegetablesPagedata:any={};

  constructor(private _cartservice:CartService) { 
    this.vegetablesPagedata=vp;
  }

  ngOnInit(): void {
  }
  addtocart(prodId : string){
    this._cartservice.setCart(prodId);
  }
}
