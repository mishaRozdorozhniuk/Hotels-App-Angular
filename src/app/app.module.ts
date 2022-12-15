import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from "../components/login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from "../pages/home/home.component";
import {HeaderComponent} from "../components/header/header.component";
import {SignUpComponent} from "../components/sign-up/sign-up.component";
import {HotelPlacesComponent} from '../components/hotel-places/hotel-places.component';
import {AdminInterfaceComponent} from "../pages/admin-interface/admin-interface.component";
import {HotelDetailsComponent} from "../pages/admin-interface/hotel-details/hotel-details.component";
import {RoomDetailsComponent} from "../pages/admin-interface/room-details/room-details.component";
import {ModalComponent} from "../components/modal/modal.component";
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {FilteredRoomsComponent} from "../pages/filtered-rooms/filtered-rooms.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SignUpComponent,
    HotelPlacesComponent,
    AdminInterfaceComponent,
    HotelDetailsComponent,
    RoomDetailsComponent,
    ModalComponent,
    FilteredRoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
