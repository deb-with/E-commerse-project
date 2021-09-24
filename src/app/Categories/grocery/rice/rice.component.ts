import { Component, OnInit } from '@angular/core';
import { RicePagedata as rp } from 'src/app/database';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-rice',
  templateUrl: './rice.component.html',
  styleUrls: ['./rice.component.css']
})
export class RiceComponent implements OnInit {
  public ricePagedata:any={};
  constructor(private _cartservice:CartService) {
    this.ricePagedata=rp;
   }
  ngOnInit(): void {
  }
  addtocart(prodId : string){

    this._cartservice.setCart(prodId);
  }
}
