import {IHotelPlace} from "./hotelPlace";

export interface IHotel {
  id?: number,
  name: string,
  contactNumber: string,
  mail: string,
  address: string,
  urlAddress: string,
  hotelPlaces: Array<IHotelPlace>
}
