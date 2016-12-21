import { Component, OnInit } from '@angular/core';

import {Opinion} from '../models/opinion';

@Component({
  selector: 'oso-comment',
  templateUrl: '../html/comment.component.html',
  styleUrls: ['../styles/comment.component.css']
})
export class CommentComponent implements OnInit {

  comment: Opinion = {
      uid: 1,
      parentUid: null,
      topic: 'First Test',
      poster: 'tester',
      comment: 'This is a test'
  };

  constructor() { }

  ngOnInit() {
  }

}
