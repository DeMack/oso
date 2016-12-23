import { Component, OnInit, Input } from '@angular/core';

import {OsoTreeNode} from '../models/oso-tree-node';
import {OsoColumn} from '../models/oso-column';

@Component({
  selector: 'oso-tree-branch',
  templateUrl: '../html/oso-tree-branch.component.html',
  styleUrls: ['../styles/oso-tree-branch.component.css']
})
export class OsoTreeBranchComponent implements OnInit {

  @Input() cols: OsoColumn[];
  @Input() node: OsoTreeNode;

  constructor() { }

  ngOnInit() {
  }

}
