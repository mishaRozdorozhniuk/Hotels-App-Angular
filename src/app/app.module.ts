import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from "../components/login/login.component";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "../pages/home/home.component";
import {HeaderComponent} from "../components/header/header.component";
import {SignUpComponent} from "../components/sign-up/sign-up.component";
import {HotelPlacesComponent} from '../components/hotel-places/hotel-places.component';
import {AdminInterfaceComponent} from "../pages/admin-interface/admin-interface.component";
import {HotelDetailsComponent} from "../pages/admin-interface/hotel-details/hotel-details.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SignUpComponent,
    HotelPlacesComponent,
    AdminInterfaceComponent,
    HotelDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
