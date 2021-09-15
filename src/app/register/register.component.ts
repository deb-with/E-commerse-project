import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  loginForm=new FormGroup({
    username:new FormControl('',[Validators.required]),
    email_address:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    confirm_password:new FormControl('',[Validators.required])
  })
  loginuser(){
    console.warn(this.loginForm.value)
  }
  get username(){
    return this.loginForm.get('username')
  }

  ngOnInit(): void {
  }

}
