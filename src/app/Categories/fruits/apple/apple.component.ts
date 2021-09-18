import { Component, OnInit } from '@angular/core';
import { ApplePagedata as ap } from 'src/app/database';
@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {
  public applePagedata:any={};
  constructor() { 
    this.applePagedata=ap;
  }
  ngOnInit(): void {
  }

}
