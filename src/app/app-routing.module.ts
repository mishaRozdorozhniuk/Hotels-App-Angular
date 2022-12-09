import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../components/login/login.component";
import {HomeComponent} from "../pages/home/home.component";
import {SignUpComponent} from "../components/sign-up/sign-up.component";
import {HotelPlacesComponent} from "../components/hotel-places/hotel-places.component";

const routes: Routes = [
  {path: 'hotels', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'hotels/:id', component: HotelPlacesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
