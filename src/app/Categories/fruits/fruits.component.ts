import { Component, OnInit } from '@angular/core';
import { FruitsPagedata as fp } from 'src/app/database';
@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
public fruitsPagedata:any={};
  constructor() { 
    this.fruitsPagedata=fp;
  }

  ngOnInit(): void {
  }

}
