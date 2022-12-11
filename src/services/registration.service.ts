import {Injectable} from '@angular/core';
import {IUser} from "../interface/loginUser";
import {ISignUpUser} from "../interface/signUpUser";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  userIsAuth = false

  loginUser: IUser = {
    email: 'Misha@roz',
    password: '123'
  }

  signUpUser: ISignUpUser = {
    displayName: 'Misha',
    email: 'Misha@roz',
    password: '123',
    isAuth: false
  }

  admin: ISignUpUser = {
    displayName: 'Admin',
    email: 'Admin@123',
    password: '123',
    isAuth: false
  }

  constructor() {
  }
}
