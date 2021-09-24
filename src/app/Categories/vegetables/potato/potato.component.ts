import { Component, OnInit } from '@angular/core';
import { PotatoPagedata as pp } from 'src/app/database';
import { CartService } from 'src/app/cart.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-potato',
  templateUrl: './potato.component.html',
  styleUrls: ['./potato.component.css']
})
export class PotatoComponent implements OnInit {
  public potatoPagedata:any={};
  constructor(private _cartservice:CartService,private _title: Title ) {
    this._title.setTitle('Potato Page');
    this.potatoPagedata=pp;
   }
  ngOnInit(): void {
  }
  addtocart(prodId : string){

    this._cartservice.setCart(prodId);
  }
}
