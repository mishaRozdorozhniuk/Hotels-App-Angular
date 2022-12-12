import {Component, OnInit} from '@angular/core';
import {HotelsService} from "../../services/hotels.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public hotelService: HotelsService) {
  }

  ngOnInit(): void {
    console.log('home')
  }
}
