import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "../components/login/login.component";
import {HomeComponent} from "../pages/home/home.component";
import {SignUpComponent} from "../components/sign-up/sign-up.component";
import {HotelPlacesComponent} from "../components/hotel-places/hotel-places.component";
import {AdminInterfaceComponent} from "../pages/admin-interface/admin-interface.component";
import {FilteredRoomsComponent} from "../pages/filtered-rooms/filtered-rooms.component";

const routes: Routes = [
  {path: '', redirectTo: "hotels", pathMatch: "full"},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'adminInterface', component: AdminInterfaceComponent},
  {path: 'adminInterface/:id', component: HotelPlacesComponent},
  {path: 'hotels', component: HomeComponent},
  {path: 'hotels/:id', component: HotelPlacesComponent},
  {path: 'filteredRooms', component: FilteredRoomsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
