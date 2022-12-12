import {Component, OnInit} from '@angular/core';
import {ISignUpUser} from "../../interface/signUpUser";
import {Router} from "@angular/router";
import {RegistrationService} from "../../services/registration.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(private router: Router, public registration: RegistrationService) {
  }

  ngOnInit(): void {
    console.log('signup')
  }

  onSubmit(signUpData: ISignUpUser): any {
    if (this.registration.signUpUser.displayName === signUpData.displayName
      && this.registration.signUpUser.email === signUpData.email
      && this.registration.signUpUser.password === signUpData.password) {
      this.router.navigate(['hotels'])
      this.registration.signUpUser.isAuth = true
      this.registration.userIsAuth = true
      // localStorage.setItem('user', JSON.stringify(signUpData))
    } else if (this.registration.admin.displayName === signUpData.displayName
      && this.registration.admin.email === signUpData.email
      && this.registration.admin.password === signUpData.password) {
      this.router.navigate(['hotels'])
      this.registration.admin.isAuth = true
      this.registration.userIsAuth = true
      // localStorage.setItem('user', JSON.stringify(signUpData))
    } else {
      return false
    }
  }
}
