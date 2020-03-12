import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { WorkspaceService } from 'src/app/services/workspace.service';

@Component({
  selector: 'app-choreographies',
  templateUrl: './choreographies.component.html',
  styleUrls: ['./choreographies.component.scss']
})
export class ChoreographiesComponent extends BaseComponent implements OnInit {

  constructor(workspaceService: WorkspaceService) {
    super(workspaceService)
   }

  ngOnInit(): void {
  }

}
