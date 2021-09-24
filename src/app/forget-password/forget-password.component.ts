import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  public userEmailId: string = '';
  public isFormSubmitted:boolean=false;
  public reactiveForm: FormGroup = this._formBuilder.group({

    'userEmailId': ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    
  });
  constructor(private _formBuilder: FormBuilder,private _title: Title ) { 
    this._title.setTitle('Home Page');
  }
  
  ngOnInit(): void {
  }

}
