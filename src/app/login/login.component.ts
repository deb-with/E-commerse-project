import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userEmailId: string='';
  public userPass: string='';
  public reactiveForm: FormGroup = this._formBuilder.group({
    'userEmailId':['',Validators.required, Validators.pattern(/^[a-z]+$/)],
    'userPass':['',Validators.required, Validators.minLength(4), Validators.maxLength(10)]
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
