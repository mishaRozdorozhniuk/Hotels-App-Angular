import {Component, OnInit} from '@angular/core';
import {HotelsService} from "../../services/hotels.service";
import {IHotel} from "../../interface/hotel";
import {IHotelPlace} from "../../interface/hotelPlace";

@Component({
  selector: 'app-filtered-rooms',
  templateUrl: './filtered-rooms.component.html',
  styleUrls: ['./filtered-rooms.component.scss']
})
export class FilteredRoomsComponent implements OnInit {
  filteredRooms: IHotelPlace[] = []
  filteredHotels: IHotel[] = []

  constructor(private homeService: HotelsService) {
  }

  filterByPrice() {
    return this.filteredRooms.sort((a: IHotelPlace, b: IHotelPlace) => a.price - b.price)
  }

  ngOnInit(): void {
    this.homeService.hotels.map((hotel: IHotel) => {
      hotel.hotelPlaces.map((room: IHotelPlace) => {
        this.homeService.filteredBedsValue.map((b: any) => {
          this.homeService.filteredAddressValue.map(address => {
            if (room.numberOfBeds === +b.text &&
              hotel.address.toLocaleLowerCase() === address.toLocaleLowerCase()) {
              this.filteredRooms.push(room)
              this.filteredHotels.push(hotel)
            }
          })
        })
      })
    })
  }
}
