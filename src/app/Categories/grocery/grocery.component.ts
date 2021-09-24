import { Component, OnInit } from '@angular/core';
import { GroceryPagedata as gp } from 'src/app/database';
import { CartService } from 'src/app/cart.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {
public groceryPagedata:any={};
  constructor(private _cartservice:CartService,private _title: Title ) { 
    this._title.setTitle('Grocery Page');
    this.groceryPagedata=gp;
  }

  ngOnInit(): void {
  }
  addtocart(prodId : string){
    this._cartservice.setCart(prodId);
  }
}
