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
  public reactiveForm: FormGroup = this._formBuilder.group({
    'userEmailId':['',Validators.required, Validators.pattern(/^[a-z0-234567890@.]+$/)],
    'userPass':['',Validators.required, Validators.minLength(8), Validators.maxLength(15)]
  })
  constructor(private _formBuilder: FormBuilder) {

   }
   reactiveformSubmitted(){
    // console.log(this.reactiveForm.value);
    console.log(this.reactiveForm.controls);
  }

  ngOnInit(): void {
  }

}
