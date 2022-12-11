import {Component, Input, OnInit} from '@angular/core';
import {IHotel} from "../../../interface/hotel";

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {
  @Input() hotel: IHotel
  isItemEdit: boolean = false

  constructor() {
  }

  editItem(): void {
    this.isItemEdit = !this.isItemEdit
  }

  saveItem() {
    this.isItemEdit = false
  }

  ngOnInit(): void {
  }
}
