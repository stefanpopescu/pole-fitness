import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { WorkspaceService } from 'src/app/services/workspace.service';
import { Category } from 'src/app/models/category.model';
import { GridSettings } from 'src/app/models/grid-settings.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent extends BaseComponent implements OnInit {

  categories: Category[];
  gridSettings:GridSettings;

  constructor(workspaceService: WorkspaceService) { 
    super(workspaceService);
    
    //dummy categories
    this.categories = [];
    for(let i=0;i<20;i++){
      var category = new Category();
      category.name = "Category "+(i+1);
      category.description = "Description "+(i+1);
      category.points = (i+1.5);
      category.pictureUrl = "picture url";
      this.categories.push(category);
    }
  }

  setGridSettings(){
    this.gridSettings = this.workspaceService.clientService.clientSettings.isMobile ? 
      (this.workspaceService.clientService.clientSettings.possibleTablet ? 
        new GridSettings(2, 160, 10) : 
        new GridSettings(1, 130, 10)) : 
      new GridSettings(3, 200, 15);
  }

  ngOnInit(){
    this.setGridSettings();
  }

}
