import { Component, OnInit } from '@angular/core';
import { GuavaPagedata as gp } from 'src/app/database';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-guava',
  templateUrl: './guava.component.html',
  styleUrls: ['./guava.component.css']
})
export class GuavaComponent implements OnInit {
  public guavaPagedata:any={};
  constructor(private _title: Title ) { 
    this._title.setTitle('Guava Page');
    this.guavaPagedata=gp;
  }
  ngOnInit(): void {
  }

}
