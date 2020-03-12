import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filter-categories',
  templateUrl: './filter-categories.component.html',
  styleUrls: ['./filter-categories.component.scss']
})
export class FilterCategoriesComponent implements OnInit {

  constructor() { }

  expanded:boolean = false;

  ngOnInit(): void {
  }

  expandCollapse(){
    this.expanded = !this.expanded;
  }

}
