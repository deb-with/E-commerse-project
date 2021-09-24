import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userEmailId: string='';
  public userPass: string='';
  public isFormSubmitted:boolean=false;

  public reactiveForm: FormGroup = this._formBuilder.group({
    'userEmailId':['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    'userPass':['',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]]
  });
  constructor(private _formBuilder: FormBuilder) {}
   ngOnInit(){
    
  }
  //  reactiveFormSubmitted(){
  //   // console.log(this.reactiveForm.value.userEmailId);
  //   console.log(this.reactiveForm.controls);
  // }
  

}
