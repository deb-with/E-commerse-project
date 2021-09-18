import { Component, OnInit } from '@angular/core';
import { PotatoPagedata as pp } from 'src/app/database';
@Component({
  selector: 'app-potato',
  templateUrl: './potato.component.html',
  styleUrls: ['./potato.component.css']
})
export class PotatoComponent implements OnInit {
  public potatoPagedata:any={};
  constructor() {
    this.potatoPagedata=pp;
   }
  ngOnInit(): void {
  }

}
