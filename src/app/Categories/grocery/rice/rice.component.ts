import { Component, OnInit } from '@angular/core';
import { RicePagedata as rp } from 'src/app/database';
import { CartService } from 'src/app/cart.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-rice',
  templateUrl: './rice.component.html',
  styleUrls: ['./rice.component.css']
})
export class RiceComponent implements OnInit {
  public ricePagedata:any={};
  constructor(private _cartservice:CartService,private _title: Title ) {
    this._title.setTitle('Rice Page');
    this.ricePagedata=rp;
   }
  ngOnInit(): void {
  }
  addtocart(prodId : string){

    this._cartservice.setCart(prodId);
  }
}
