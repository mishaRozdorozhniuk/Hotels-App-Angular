import {Component, Input, OnInit} from '@angular/core';
import {IHotel} from "../../../interface/hotel";
import {IHotelPlace} from "../../../interface/hotelPlace";

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {
  @Input() hotel: IHotel
  @Input() editRoom: (arr: number) => void
  @Input() saveRoom: (arr: number) => void
  @Input() deleteRoom: (arr: Array<IHotelPlace>, id: number) => void

  constructor() {
  }

  ngOnInit(): void {
  }

}
