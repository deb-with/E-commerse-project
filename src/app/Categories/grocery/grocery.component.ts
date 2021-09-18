import { Component, OnInit } from '@angular/core';
import { GroceryPagedata as gp } from 'src/app/database';
@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {
public groceryPagedata:any={};
  constructor() { 
    this.groceryPagedata=gp;
  }

  ngOnInit(): void {
  }

}
