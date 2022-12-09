import { Component, OnInit } from '@angular/core';
import {IUser} from "../../interface/loginUser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: IUser = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(loginData: IUser){
    this.user = loginData
    console.log(this.user)
  }
}
