import { Component, OnInit } from '@angular/core';
import { RicePagedata as rp } from 'src/app/database';
@Component({
  selector: 'app-rice',
  templateUrl: './rice.component.html',
  styleUrls: ['./rice.component.css']
})
export class RiceComponent implements OnInit {
  public ricePagedata:any={};
  constructor() {
    this.ricePagedata=rp;
   }
  ngOnInit(): void {
  }

}
