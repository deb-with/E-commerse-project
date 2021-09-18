import { Component, OnInit } from '@angular/core';
import { VegetablesPagedata as vp } from 'src/app/database';
@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {
public vegetablesPagedata:any={};

  constructor() { 
    this.vegetablesPagedata=vp;
  }

  ngOnInit(): void {
  }

}
