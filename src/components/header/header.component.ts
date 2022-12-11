import {Component, OnInit} from '@angular/core';
import {RegistrationService} from "../../services/registration.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public registration: RegistrationService) {
  }

  ngOnInit(): void {
  }

}
