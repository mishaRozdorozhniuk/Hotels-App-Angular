import {Component, OnInit} from '@angular/core';
import {HotelsService} from "../../services/hotels.service";
import {IHotel} from "../../interface/hotel";

@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.component.html',
  styleUrls: ['./admin-interface.component.scss']
})
export class AdminInterfaceComponent implements OnInit {
  hotelsCopy = this.hotelService.hotels.splice(0)
  hotelsWithOwners: IHotel[] = []

  constructor(private hotelService: HotelsService) {
  }

  ngOnInit(): void {
    console.log('admin')
  }

  handleElementsCheck() {
    this.hotelsCopy.map(hotel => {
      hotel.hasOwnProperty('hotelOwner') && this.hotelsWithOwners.push(hotel)
    })
  }
}
