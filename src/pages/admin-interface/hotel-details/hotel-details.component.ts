import {Component, Input} from '@angular/core';
import {IHotel} from "../../../interface/hotel";
import {IHotelPlace} from "../../../interface/hotelPlace";

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
}
