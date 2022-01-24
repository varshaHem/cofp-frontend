import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carbon-footprint-info-list',
  templateUrl: './carbon-footprint-info-list.component.html',
  styleUrls: ['./carbon-footprint-info-list.component.css']
})
export class CarbonFootprintInfoListComponent implements OnInit {

  @Input()
  carbonFootprintData!:any

  constructor() { }

  ngOnInit(): void {
  }

}
