import { Component, OnInit, Input, AfterContentInit } from '@angular/core';

import {OsoColumn} from '../models/oso-column';

@Component({
  selector: 'oso-table',
  templateUrl: '../html/oso-table.component.html',
  styleUrls: ['../styles/oso-table.component.css']
})
export class OsoTableComponent implements AfterContentInit {

  @Input() cols: OsoColumn[];
  @Input() items: any[];

  constructor() { }

  ngAfterContentInit() { }

}
