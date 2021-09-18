import { Component, OnInit } from '@angular/core';
import { MangoPagedata as mp } from 'src/app/database';
@Component({
  selector: 'app-mango',
  templateUrl: './mango.component.html',
  styleUrls: ['./mango.component.css']
})
export class MangoComponent implements OnInit {
  public mangoPagedata:any={};
  constructor() {
    this.mangoPagedata=mp;
   }
  ngOnInit(): void {
  }

}
