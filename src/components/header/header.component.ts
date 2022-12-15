import {Component, OnInit} from '@angular/core';
import {RegistrationService} from "../../services/registration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public registration: RegistrationService, public route: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null) {
      this.registration.userIsAuth = true
    }
  }

  logOut() {
    localStorage.removeItem('user')
    this.registration.userIsAuth = false
    this.registration.admin.isAuth = false
    this.registration.signUpUser.isAuth = false
    this.route.navigate(['signup'])
  }
}
