import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { HomePagedata as hpd } from '../database';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public homePagedata: any={};

  constructor(private _cartservice:CartService,private _title: Title ) {
    this._title.setTitle('Home Page');
    
    this.homePagedata=hpd;

   }

  ngOnInit(): void {
  }
  addtocart(prodId : string){
    this._cartservice.setCart(prodId);
    
  }

}
