import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from 'src/app/services/workspace.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(protected workspaceService: WorkspaceService) { 
    this.workspaceService.checkAuthentication();
  }

  ngOnInit(): void {
  }

}
