import {Component, Input} from '@angular/core';
import {IHotel} from "../../../interface/hotel";
import {IHotelPlace} from "../../../interface/hotelPlace";
import {HotelsService} from "../../../services/hotels.service";

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent {
  @Input() hotel: IHotel
  @Input() hotelsWithOwners: IHotel[]
  isItemEdit: boolean = false
  showRelatedRooms: boolean = false
  currentHotel: any
  addHotelTrigger: boolean = false
  currentHotelId: number

  constructor(private hotelService: HotelsService) {
  }

  editItem(): void {
    this.isItemEdit = !this.isItemEdit
  }

  saveItem(): void {
    this.isItemEdit = false
  }

  editRoom(id: number): void {
    this.hotel.hotelPlaces.map(h => h.id === id ? h.isEdit = !h.isEdit : null)
  }

  saveRoom(id: number): void {
    this.hotel.hotelPlaces.map(h => h.id === id ? h.isEdit = false : null)
  }

  handleShowRelatedRooms(): void {
    this.showRelatedRooms = !this.showRelatedRooms
  }

  deleteRoom(hotel: Array<IHotelPlace>, id: number) {
    const objWithIdIndex = hotel.findIndex((obj: IHotelPlace) => obj.id === id);

    if (objWithIdIndex > -1) {
      hotel.splice(objWithIdIndex, 1);
    }

    return hotel;
  }

  onSubmit(value: any, id: number) {
    this.currentHotel = this.hotelService.getCurrentHotel(id)
    let newRoom = {
      id: Math.random() * (20 - 100) + 20,
      name: value.name,
      numberOfBeds: value.numberOfBeds,
      price: value.price,
      isEdit: false,
      url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/339424404.jpg?k=7d12e5239462fa03a1127b8ce9afb3074bbbbd90567593672ba8080353397c94&o=&hp=1'
    }
    this.currentHotel.hotelPlaces.push(newRoom)
    this.addHotelTrigger = !this.addHotelTrigger
  }

  addRoom() {
    this.addHotelTrigger = !this.addHotelTrigger
  }

  closeModal() {
    this.addHotelTrigger = false
  }
}
