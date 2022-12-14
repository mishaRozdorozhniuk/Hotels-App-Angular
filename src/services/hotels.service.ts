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
      hotelStatus: 'Active',
      postalOffice: {name: 'Zaklada „Vaša pošta“', postCode: 10343},
      hotelOwner: true,
      urlAddress: 'https://cf.bstatic.com/xdata/images/hotel/max500/69650826.jpg?k=14878490db281786653b942e68446520095bbbf3c98ab18ec465d474631d0275&o=&hp=1',
      hotelPlaces: [
        {
          id: 1,
          name: 'room1',
          numberOfBeds: 2,
          price: 500,
          isEdit: false,
          url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/339424404.jpg?k=7d12e5239462fa03a1127b8ce9afb3074bbbbd90567593672ba8080353397c94&o=&hp=1'
        },
        {
          id: 2,
          name: 'room2',
          numberOfBeds: 4,
          price: 700,
          isEdit: false,
          url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/338627497.jpg?k=62b3d1e6f80c0557afbef65f4458cb23e8a03385ca25c48197616d8ebb1dc9cb&o=&hp=1'
        },
        {
          id: 3,
          name: 'room3',
          numberOfBeds: 1,
          price: 300,
          isEdit: false,
          url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/338627132.jpg?k=2901bd7778b3fd3b9a6b11c003d536c54d419f4257a7971f198b2fd98a5c68c0&o=&hp=1'
        },
      ]
    },
    {
      id: 2,
      name: 'Hotel Globo',
      contactNumber: '999-555-333',
      mail: 'somehotel@gmail.com',
      address: 'Zagreb',
      hotelStatus: 'Not confirmed',
      postalOffice: {name: 'TELEGRAM SUĆUTI', postCode: 10223},
      urlAddress: 'https://cf.bstatic.com/xdata/images/hotel/max500/200153077.jpg?k=7d300bc86f5c5f3675ea5d07b01f4f9cc6528bd36ee621ce4d3224217ac40e21&o=&hp=1',
      hotelPlaces: [
        {
          id: 4,
          name: 'room1',
          numberOfBeds: 2,
          price: 500,
          isEdit: false,
          url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/338199700.jpg?k=03a14c12da35cf81eca35dbafe682cc77a9e31472eba83140828e9d13622122a&o=&hp=1'
        },
        {
          id: 5,
          name: 'room2',
          numberOfBeds: 4,
          price: 700,
          isEdit: false,
          url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/338625027.jpg?k=2d33c1426219c167d9bcdbe033e8ae7693ea10c35c85bfde084f15eb5f550d2a&o=&hp=1'
        },
        {
          id: 6,
          name: 'room3',
          numberOfBeds: 1,
          price: 300,
          isEdit: false,
          url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/338627179.jpg?k=59620b5606e6b39594399b9d09b8e6bc7edf4e3ff196264947d4ae661517e6e2&o=&hp=1'
        },
      ]
    },
    {
      id: 3,
      name: 'Valenti rooms',
      contactNumber: '123-312-435',
      mail: 'somehotel@gmail.com',
      address: 'Zagreb',
      hotelStatus: 'Rejected',
      postalOffice: {name: 'TEKST', postCode: 10245},
      hotelOwner: true,
      urlAddress: 'https://cf.bstatic.com/xdata/images/hotel/square600/13510633.webp?k=ec9d0ab553119c09cd69e23d5a57693f148870497701639bd7cfcee7466b2f89&o=&s=1',
      hotelPlaces: [
        {
          id: 7,
          name: 'room1',
          numberOfBeds: 2,
          price: 500,
          isEdit: false,
          url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/338199282.jpg?k=1537a1f8ca399568930f35f73ec6d3b562dbd1fcb8bd3eaad96e432f34fe9f82&o=&hp=1'
        },
        {
          id: 8,
          name: 'room2',
          numberOfBeds: 4,
          price: 700,
          isEdit: false,
          url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/338199299.jpg?k=7b35ca3b503f4b4017273f1d40256ecf19f2623bc03d02e7509ee31b1f1f6a47&o=&hp=1'
        },
        {
          id: 9,
          name: 'room3',
          numberOfBeds: 1,
          price: 300,
          isEdit: false,
          url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/338199611.jpg?k=54b0737850c0a49e0e3e3c765d46e8aa1d2c10fdc435d7ac83f94bd56ba09884&o=&hp=1'
        },
      ]
    },
    {
      id: 4,
      name: 'Apartments Tudor',
      contactNumber: '234-545-234',
      mail: 'somehotel@gmail.com',
      address: 'Zagreb',
      hotelStatus: 'Active',
      postalOffice: {name: 'Croatian Post', postCode: 10000},
      urlAddress: 'https://cf.bstatic.com/xdata/images/hotel/square600/351627517.webp?k=0a74aabe3c256d198ceca8a4f039c4a5fb18d2a6da01847e4715041809a3d94b&o=&s=1',
      hotelPlaces: [
        {
          id: 10,
          name: 'room1',
          numberOfBeds: 2,
          price: 500,
          isEdit: false,
          url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/358780244.jpg?k=531a1a254e0208da153af79df41e6af1f831986ffc26eaaf9d7ddb1b24335348&o=&hp=1'
        },
        {
          id: 11,
          name: 'room2',
          numberOfBeds: 4,
          price: 700,
          isEdit: false,
          url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/407929137.jpg?k=6a49701f545d6657423cecbe7eb5b56ba20a951c85bd0544c650219e3a0b2662&o=&hp=1'
        },
        {
          id: 12,
          name: 'room3',
          numberOfBeds: 1,
          price: 300,
          isEdit: false,
          url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/407929150.jpg?k=20115e71432374187c673cabff481d4ffecc8b8dfcd7e2294d73930ee5c56a27&o=&hp=1'
        },
        {
          id: 13,
          name: 'room4',
          numberOfBeds: 1,
          price: 300,
          isEdit: false,
          url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/152679073.jpg?k=05f9596f5c4edf2300f98719d361447e866232bb38e7bd2598d8ae4fd6e57013&o=&hp=1'
        },
      ]
    },
    {
      id: 5,
      name: 'Luxury Residence',
      contactNumber: '222-555-666',
      mail: 'somehotel@gmail.com',
      address: 'Zagreb',
      hotelStatus: 'Active',
      postalOffice: {name: 'Croatian Post', postCode: 15420},
      hotelOwner: true,
      urlAddress: 'https://cf.bstatic.com/xdata/images/hotel/square600/288552729.webp?k=5730df849065c61b20e99f81f97e878d3fa97c84720a496bfcc1cbd4ceceea93&o=&s=1',
      hotelPlaces: [
        {
          id: 14,
          name: 'room1',
          numberOfBeds: 2,
          price: 500,
          isEdit: false,
          url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/407929120.jpg?k=83b706509490cbbdc0e242a449755aaf4c8c22a2a105bf6bc91289e236e55186&o=&hp=1'
        },
        {
          id: 15,
          name: 'room2',
          numberOfBeds: 4,
          price: 700,
          isEdit: false,
          url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/407929132.jpg?k=f8d9f08f67d002d99d24892f40e20b768bfc65466758f3ae20c5fbc7f418d296&o=&hp=1'
        },
      ]
    }
  ]

  getCurrentHotel(id: number) {
    return this.hotels.find(hotel => hotel?.id === id)
  }

  deleteRoomById(id: number) {
    return this.hotels.map(h => h.hotelPlaces.filter(room => room.id === id))
  }
}
