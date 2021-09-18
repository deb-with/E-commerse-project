import { Component, OnInit } from '@angular/core';
import { BananasPagedata as bp } from 'src/app/database';
@Component({
  selector: 'app-bananas',
  templateUrl: './bananas.component.html',
  styleUrls: ['./bananas.component.css']
})
export class BananasComponent implements OnInit {
  public bananasPagedata:any={};
  constructor() { 
    this.bananasPagedata=bp;
  }
  ngOnInit(): void {
  }

}
