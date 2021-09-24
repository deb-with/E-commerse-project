import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.css']
})
export class BuyNowComponent implements OnInit {
// public validators:any={};
  constructor(private _title: Title ) { 
    this._title.setTitle('Buy-Now Page');
  }

  ngOnInit(): void {
  
// Validators=({
//     roles: {
//         fullname: {
//             required: true,
//         },
//         email: {
//             required: true,
//         },
//         address: {
//             required: true,
//         },
//         city: {
//             required: true,
//         },
//         state: {
//             required: true,
//         },
//         zip: {
//             required: true,
//         },
//         cardname: {
//             required: true,
//         },
//         cardnumber: {
//             required: true,
//         },
//         expmonth: {
//             required: true,
//         },
//         expyear: {
//             required: true,
//         },
//         cvv: {
//             required: true,
//         },

//     },
//     messages: {
//         fullname: "Please input full name*",
//         email: "Please input email*",
//         city: "Please input city*",
//         address: "Please input address*",
//         state: "Please input state*",
//         zip: "Please input address*",
//         cardname: "Please input card name*",
//         cardnumber: "Please input card number*",
//         expmonth: "Please input exp month*",
//         expyear: "Please input exp year*",
//         cvv: "Please input cvv*",
//     },
// });
    
  }

}
