import { Component, OnInit } from '@angular/core';
import { MangoPagedata as mp } from 'src/app/database';
import { CartService } from 'src/app/cart.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-mango',
  templateUrl: './mango.component.html',
  styleUrls: ['./mango.component.css']
})
export class MangoComponent implements OnInit {
  public mangoPagedata:any={};
  constructor(private _cartservice:CartService,private _title: Title ) {
    this._title.setTitle('Mango Page');
    this.mangoPagedata=mp;
   }
  ngOnInit(): void {
  }
  addtocart(prodId : string){
    this._cartservice.setCart(prodId);
  }

}
