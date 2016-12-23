import { Component, OnInit, Input } from '@angular/core';

import { OsoColumn } from '../models/oso-column';
import { OsoTreeBranchComponent } from './oso-tree-branch.component';

import { OsoTreeNode } from '../models/oso-tree-node';

@Component({
  selector: 'oso-tree',
  templateUrl: '../html/oso-tree.component.html',
  styleUrls: ['../styles/oso-tree.component.css']
})
export class OsoTreeComponent implements OnInit {

  @Input() cols: OsoColumn[];
  @Input() items: OsoTreeNode[];

  constructor() { }

  ngOnInit() {
  }

}
