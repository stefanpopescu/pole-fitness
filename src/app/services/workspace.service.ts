import { Injectable } from '@angular/core';
import { WorkspaceState } from '../models/workspace-state.model';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ClientService } from './client.service';

@Injectable({
    providedIn: 'root',
})
export class WorkspaceService {

    workspaceState: WorkspaceState;

    constructor(public authService: AuthService, public clientService: ClientService, private router: Router){
        this.workspaceState = new WorkspaceState();
        this.workspaceState.showMenu = false;
    }

    checkAuthentication(){
        if(!this.authService.authModel.isAuth)
            this.router.navigateByUrl('/auth');
    }
   
}