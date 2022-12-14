import {Component, OnInit} from '@angular/core';
import {HotelsService} from "../../services/hotels.service";
import {IHotel} from "../../interface/hotel";

@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.component.html',
  styleUrls: ['./admin-interface.component.scss']
})
export class AdminInterfaceComponent implements OnInit {
  hotelsWithOwners: IHotel[] = []

  constructor(private hotelService: HotelsService) {
  }

  ngOnInit(): void {
  }

  handleElementsCheck() {
    this.hotelService.hotels.map(hotel => {
      hotel.hasOwnProperty('hotelOwner') && this.hotelsWithOwners.push(hotel)
    })
  }
}
