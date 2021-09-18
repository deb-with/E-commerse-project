import { Component, OnInit } from '@angular/core';
import { SugarPagedata as sp } from 'src/app/database';
@Component({
  selector: 'app-sugar',
  templateUrl: './sugar.component.html',
  styleUrls: ['./sugar.component.css']
})
export class SugarComponent implements OnInit {
  public sugarPagedata:any={};
  constructor() {
    this.sugarPagedata=sp;
   }
  

  ngOnInit(): void {
  }

}
