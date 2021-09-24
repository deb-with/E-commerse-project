import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { OnionPagedata as op } from 'src/app/database';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-onion',
  templateUrl: './onion.component.html',
  styleUrls: ['./onion.component.css']
})
export class OnionComponent implements OnInit {
  public onionPagedata:any={};
  constructor(private _cartservice:CartService,private _title: Title ) {
    this._title.setTitle('Onion Page');
    this.onionPagedata=op;
   }
  ngOnInit(): void {
  }
  addtocart(prodId : string){

    this._cartservice.setCart(prodId);
  }
}
