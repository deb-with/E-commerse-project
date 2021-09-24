import { Component, OnInit } from '@angular/core';
import { BananasPagedata as bp } from 'src/app/database';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-bananas',
  templateUrl: './bananas.component.html',
  styleUrls: ['./bananas.component.css']
})
export class BananasComponent implements OnInit {
  public bananasPagedata:any={};
  constructor(private _cartservice:CartService) { 
    this.bananasPagedata=bp;
  }
  ngOnInit(): void {
  }
  addtocart(prodId : string){
    this._cartservice.setCart(prodId);
  }
}
