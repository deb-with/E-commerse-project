import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // constructor() { }
  // loginForm=new FormGroup({
  //   username:new FormControl('',[Validators.required]),
  //   email_address:new FormControl('',[Validators.required]),
  //   password:new FormControl('',[Validators.required]),
  //   confirm_password:new FormControl('',[Validators.required])
  // })
  // loginuser(){
  //   console.warn(this.loginForm.value)
  // }
  // get username(){
  //   return this.loginForm.get('username')
  // }
  public userName: string = '';
  public userEmailId: string = '';
  public userPass: string = '';
  public userPassConfirm: string = '';
  public button:any='';
public isFormSubmitted:boolean=false;
  public reactiveForm: FormGroup = this._formBuilder.group({
    'userName': ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
    'userEmailId': ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    'userPass': ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    'userPassConfirm': ['', [this.passwordChecker.bind(this)]],
    'button':['',[Validators.required]]
  });
  constructor(private _formBuilder: FormBuilder) { }
  passwordChecker() {
    if (typeof this.reactiveForm !== 'undefined') {
      console.log(this.reactiveForm);
      setTimeout(() => {
        if (this.reactiveForm.value.userPass != this.reactiveForm.value.userPassConfirm) {
          console.log('Password Missmatch');
          this.reactiveForm.controls['userPassConfirm'].setErrors({passwordMismatch:true});
        }
        else {
          console.log('PasswordMatch');
          this.reactiveForm.controls['userPassConfirm'].setErrors(null);
        }
      }, 10);
    }

  }
  ngOnInit(): void {
  }

}
