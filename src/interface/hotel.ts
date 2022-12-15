import {IHotelPlace} from "./hotelPlace";
import {IPostOffice} from "./postalOffice";

export interface IHotel {
  id: number,
  name: string,
  contactNumber: string,
  mail: string,
  address: string,
  urlAddress: string,
  hotelStatus: string,
  hotelOwner?: boolean,
  postalOffice: IPostOffice,
  hotelPlaces: Array<IHotelPlace>
}
