import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  showOtherFilters:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  toggleIcon(){
    this.showOtherFilters = !this.showOtherFilters;
  }
}
