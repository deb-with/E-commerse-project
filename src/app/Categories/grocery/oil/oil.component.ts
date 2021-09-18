import { Component, OnInit } from '@angular/core';
import { OilPagedata as op } from 'src/app/database';
@Component({
  selector: 'app-oil',
  templateUrl: './oil.component.html',
  styleUrls: ['./oil.component.css']
})
export class OilComponent implements OnInit {
  public oilPagedata:any={};
  constructor() {
    this.oilPagedata=op;
   }
  ngOnInit(): void {
  }

}
