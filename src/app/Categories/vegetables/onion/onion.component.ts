import { Component, OnInit } from '@angular/core';
import { OnionPagedata as op } from 'src/app/database';

@Component({
  selector: 'app-onion',
  templateUrl: './onion.component.html',
  styleUrls: ['./onion.component.css']
})
export class OnionComponent implements OnInit {
  public onionPagedata:any={};
  constructor() {
    this.onionPagedata=op;
   }
  ngOnInit(): void {
  }

}
