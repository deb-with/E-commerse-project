import { Component, OnInit } from '@angular/core';
import { GuavaPagedata as gp } from 'src/app/database';
@Component({
  selector: 'app-guava',
  templateUrl: './guava.component.html',
  styleUrls: ['./guava.component.css']
})
export class GuavaComponent implements OnInit {
  public guavaPagedata:any={};
  constructor() { 
    this.guavaPagedata=gp;
  }
  ngOnInit(): void {
  }

}
