import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-android-app',
  templateUrl: './android-app.component.html',
  styleUrls: ['./android-app.component.css']
})
export class AndroidAppComponent implements OnInit {

  constructor(private _title: Title ) { 
    this._title.setTitle('Android Page');
  }

  ngOnInit(): void {
  }

}
