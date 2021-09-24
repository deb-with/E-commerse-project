import { Component, OnInit } from '@angular/core';
import { ApplePagedata as ap } from 'src/app/database';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {
  public applePagedata:any={};
  constructor(private _cartservice:CartService) { 
    this.applePagedata=ap;
  }
  ngOnInit(): void {
  }
  addtocart(prodId : string){
    this._cartservice.setCart(prodId);
  }
}
