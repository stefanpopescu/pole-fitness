import { Injectable } from '@angular/core';
import { Auth } from '../models/auth.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    authModel : Auth;

    constructor(){
       this.authModel = new Auth();
       this.authModel.isAuth = true;
    }
}