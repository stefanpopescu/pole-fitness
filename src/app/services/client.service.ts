import { Injectable } from '@angular/core';
import { ClientSettings } from '../models/client-settings.model';

@Injectable({
    providedIn: 'root',
})
export class ClientService {

    clientSettings: ClientSettings

    constructor(){
       this.clientSettings = new ClientSettings();
       this.clientSettings.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
       this.clientSettings.possibleTablet = this.clientSettings.isMobile && window.screen.width > 500;
    }
}