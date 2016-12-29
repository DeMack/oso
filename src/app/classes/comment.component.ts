import { Component, OnInit, Input } from '@angular/core';

import {Opinion} from '../models/opinion';
import {OpinionFetcherService} from '../services/opinion-fetcher.service';

import {OpinionNodeMapper} from '../utils/opinion-node-mapper';

@Component({
  selector: 'oso-comment',
  templateUrl: '../html/comment.component.html',
  styleUrls: ['../styles/comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() opinion: Opinion;

  constructor() { }

  ngOnInit() {
  }

}
