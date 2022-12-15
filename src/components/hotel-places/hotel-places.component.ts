import {Component, OnInit} from '@angular/core';
import {HotelsService} from "../../services/hotels.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hotel-places',
  templateUrl: './hotel-places.component.html',
  styleUrls: ['./hotel-places.component.scss']
})
export class HotelPlacesComponent implements OnInit {
  id: any
  currentHotel: any

  constructor(
    public hotelsService: HotelsService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.currentHotel = this.hotelsService.getCurrentHotel(+this.id)
  }
}
