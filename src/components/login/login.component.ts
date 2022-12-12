import {Component, OnInit} from '@angular/core';
import {IUser} from "../../interface/loginUser";
import {Router} from "@angular/router";
import {RegistrationService} from "../../services/registration.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, public registration: RegistrationService) {
  }

  ngOnInit(): void {
    console.log('login')
  }

  onSubmit(loginData: IUser) {
    this.registration.loginUser.email === loginData.email && this.registration.loginUser.password === loginData.password
      ? this.router.navigate(['hotels'])
      : false
  }
}
