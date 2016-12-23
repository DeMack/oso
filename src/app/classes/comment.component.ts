import { Component, OnInit } from '@angular/core';

import {Opinion} from '../models/opinion';
import {OpinionFetcherService} from '../services/opinion-fetcher.service';
import {OsoTreeNode} from '../models/oso-tree-node';

import {OpinionNodeMapper} from '../utils/opinion-node-mapper';

@Component({
  selector: 'oso-comment',
  templateUrl: '../html/comment.component.html',
  styleUrls: ['../styles/comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: Opinion[];
  treeNodes: OsoTreeNode[] = [];
  cols: {name: string, field: string}[];

  constructor(private opinionFetcherService: OpinionFetcherService) { }

  ngOnInit() {
    this.opinionFetcherService.getComments().then(comments => {
      this.comments = comments;
      for (let op of this.comments) {
        this.treeNodes.push(OpinionNodeMapper.mapOpinionToTreeNode(op));
      }
    });

    this.cols = [
      {name: 'Poster', field: 'poster'},
      {name: 'Comment', field: 'comment'}
    ];
  }

}
