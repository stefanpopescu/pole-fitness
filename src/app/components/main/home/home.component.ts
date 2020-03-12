import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from 'src/app/services/workspace.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit  {

  constructor(workspaceService: WorkspaceService) { 
    super(workspaceService);
  }

  ngOnInit(): void {
  }

}
