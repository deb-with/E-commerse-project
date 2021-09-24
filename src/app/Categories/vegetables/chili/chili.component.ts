import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ChiliPagedata as cp } from 'src/app/database';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-chili',
  templateUrl: './chili.component.html',
  styleUrls: ['./chili.component.css']
})
export class ChiliComponent implements OnInit {
public chiliPagedata:any={};
  constructor(private _cartservice:CartService,private _title: Title ) {
    this._title.setTitle('Chilli Page');
    this.chiliPagedata=cp;
   }

  ngOnInit(): void {
  }
  addtocart(prodId : string){

    this._cartservice.setCart(prodId);
  }

}
