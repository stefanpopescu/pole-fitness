import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from 'src/app/services/workspace.service';

@Component({
  selector: 'side-bottom-menu',
  templateUrl: './side-bottom-menu.component.html',
  styleUrls: ['./side-bottom-menu.component.scss']
})
export class SideBottomMenuComponent implements OnInit {

  constructor(public workspaceService: WorkspaceService) { }

  ngOnInit(): void {
  }

  closeMenu(){
    this.workspaceService.workspaceState.showMenu = false;
  }

}
