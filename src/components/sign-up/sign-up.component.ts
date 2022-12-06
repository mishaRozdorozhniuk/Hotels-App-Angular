import { Component, OnInit } from '@angular/core';
import {ISignUpUser} from "../../interface/signUpUser";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpUser: ISignUpUser = {
    displayName: '',
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(signUpData: ISignUpUser){
    this.signUpUser = signUpData
    console.log(this.signUpUser)
  }
}
