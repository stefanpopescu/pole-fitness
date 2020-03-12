import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from 'src/app/services/workspace.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss']
})
export class AppToolbarComponent implements OnInit {

  constructor(public workspaceService: WorkspaceService) { }

  ngOnInit(): void {
  }

  showHideMenu(){
    this.workspaceService.workspaceState.showMenu = !this.workspaceService.workspaceState.showMenu;
  }

}
