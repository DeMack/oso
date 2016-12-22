import { Component, OnInit } from '@angular/core';

import {TreeNode} from 'primeng/primeng';

import {Opinion} from '../models/opinion';
import {OpinionFetcherService} from '../services/opinion-fetcher.service';

@Component({
  selector: 'oso-comment',
  templateUrl: '../html/comment.component.html',
  styleUrls: ['../styles/comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: TreeNode[];

  constructor(private opinionFetcherService: OpinionFetcherService) { }

  ngOnInit() {
    this.opinionFetcherService.getComments().then(comments => this.comments = comments);
  }

}
