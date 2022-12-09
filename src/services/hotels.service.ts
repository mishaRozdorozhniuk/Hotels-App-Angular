import {Injectable} from '@angular/core';
import {IHotel} from "../interface/hotel";

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  hotels: IHotel[] = [
    {
      id: 1,
      name: 'Villa Domina',
      contactNumber: '000-000-000',
      mail: 'somehotel@gmail.com',
      address: 'Zagreb',
      urlAddress: 'https://cf.bstatic.com/xdata/images/hotel/max500/69650826.jpg?k=14878490db281786653b942e68446520095bbbf3c98ab18ec465d474631d0275&o=&hp=1',
      hotelPlaces: [
        {name: 'room1', numberOfBeds: 2, price: 500},
        {name: 'room2', numberOfBeds: 4, price: 700},
        {name: 'room3', numberOfBeds: 1, price: 300},
      ]
    },
    {
      id: 2,
      name: 'Hotel Globo',
      contactNumber: '999-555-333',
      mail: 'somehotel@gmail.com',
      address: 'Zagreb',
      urlAddress: 'https://cf.bstatic.com/xdata/images/hotel/max500/200153077.jpg?k=7d300bc86f5c5f3675ea5d07b01f4f9cc6528bd36ee621ce4d3224217ac40e21&o=&hp=1',
      hotelPlaces: [
        {name: 'room1', numberOfBeds: 2, price: 500},
        {name: 'room2', numberOfBeds: 4, price: 700},
        {name: 'room3', numberOfBeds: 1, price: 300},
      ]
    },
    {
      id: 3,
      name: 'Valenti rooms',
      contactNumber: '123-312-435',
      mail: 'somehotel@gmail.com',
      address: 'Zagreb',
      urlAddress: 'https://cf.bstatic.com/xdata/images/hotel/square600/13510633.webp?k=ec9d0ab553119c09cd69e23d5a57693f148870497701639bd7cfcee7466b2f89&o=&s=1',
      hotelPlaces: [
        {name: 'room1', numberOfBeds: 2, price: 500},
        {name: 'room2', numberOfBeds: 4, price: 700},
        {name: 'room3', numberOfBeds: 1, price: 300},
      ]
    },
    {
      id: 4,
      name: 'Apartments Tudor',
      contactNumber: '234-545-234',
      mail: 'somehotel@gmail.com',
      address: 'Zagreb',
      urlAddress: 'https://cf.bstatic.com/xdata/images/hotel/square600/351627517.webp?k=0a74aabe3c256d198ceca8a4f039c4a5fb18d2a6da01847e4715041809a3d94b&o=&s=1',
      hotelPlaces: [
        {name: 'room1', numberOfBeds: 2, price: 500},
        {name: 'room2', numberOfBeds: 4, price: 700},
        {name: 'room3', numberOfBeds: 1, price: 300},
        {name: 'room4', numberOfBeds: 1, price: 300},
      ]
    },
    {
      id: 5,
      name: 'Luxury Residence',
      contactNumber: '222-555-666',
      mail: 'somehotel@gmail.com',
      address: 'Zagreb',
      urlAddress: 'https://cf.bstatic.com/xdata/images/hotel/square600/288552729.webp?k=5730df849065c61b20e99f81f97e878d3fa97c84720a496bfcc1cbd4ceceea93&o=&s=1',
      hotelPlaces: [
        {name: 'room1', numberOfBeds: 2, price: 500},
        {name: 'room2', numberOfBeds: 4, price: 700},
      ]
    }
  ]

  constructor() { }

  getCurrentHotel(id: number) {
    return this.hotels.find(hotel => hotel?.id === id)
  }
}
