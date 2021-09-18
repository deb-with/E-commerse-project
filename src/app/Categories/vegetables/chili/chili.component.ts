import { Component, OnInit } from '@angular/core';
import { ChiliPagedata as cp } from 'src/app/database';
@Component({
  selector: 'app-chili',
  templateUrl: './chili.component.html',
  styleUrls: ['./chili.component.css']
})
export class ChiliComponent implements OnInit {
public chiliPagedata:any={};
  constructor() {
    this.chiliPagedata=cp;
   }

  ngOnInit(): void {
  }

}
