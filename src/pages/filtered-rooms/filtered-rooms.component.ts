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

  filteredHotelsWithRooms: any = []

  constructor(private homeService: HotelsService) {
  }

  ngOnInit(): void {
    // this.homeService.hotels.map((hotel: IHotel) => {
    //   hotel.hotelPlaces.map((room: IHotelPlace) => {
    //     this.homeService.filteredBedsValue.map((b: any) => {
    //       this.homeService.filteredAddressValue.map(address => {
    //         if (room.numberOfBeds === +b.text &&
    //           hotel.address.toLocaleLowerCase() === address.toLocaleLowerCase()) {
    //           this.filteredRooms.push(room)
    //           this.filteredHotels.push(hotel)
    //         }
    //       })
    //     })
    //   })
    // })
    //
    // let filteredAll = this.filteredHotels.map((hotel: IHotel) =>
    //   hotel.hotelPlaces.filter((room: IHotelPlace) => room.numberOfBeds === 3 || room.numberOfBeds === 2))
    // console.log(filteredAll)
    // this.filteredHotels.map((hotel2: any) => {
    //   this.homeService.hotels.map((hotel: any) => {
    //     filteredAll.map((el: any) => {
    //       el.map((deepRoom: any) => {
    //         if (hotel2.id === hotel.id) {
    //           hotel.hotelPlaces = [deepRoom]
    //         }
    //       })
    //     })
    //   })
    // })
    //
    // console.log(this.filteredHotels)

    // console.log(this.filteredRooms)
    // this.filteredHotels.map(fHotel => (
    //
    //   this.homeService.filteredBedsValue.map((b: any) =>
    //       //     fHotel.hotelPlaces.filter((el: IHotelPlace) => el.numberOfBeds !== +b.text)
    //       fHotel.hotelPlaces.filter(fRoom => fRoom.numberOfBeds === +b.text) &&
    //       this.filteredHotelsWithRooms.push(fHotel)
    //     //   //     // this.filteredHotelsWithRooms.push(fHotel)
    //   )
    // ))

    // this.filteredHotelsWithRooms.push(this.filteredHotels)
    // console.log(this.filteredHotelsWithRooms)
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
