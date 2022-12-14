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
    this.route.navigate(['signup'])
    this.registration.userIsAuth = false
  }
}
