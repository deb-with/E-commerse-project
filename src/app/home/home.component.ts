import { Component, OnInit } from '@angular/core';
import { HomePagedata as hpd } from '../database';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public homePagedata: any={};

  constructor() {
    this.homePagedata=hpd;
   }

  ngOnInit(): void {
  }

}
