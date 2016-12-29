import { Component, OnInit } from '@angular/core';

import {OpinionFetcherService} from '../services/opinion-fetcher.service';
import {Opinion} from '../models/opinion';

@Component({
  selector: 'oso-thread',
  templateUrl: '../html/thread.component.html',
  styleUrls: ['../styles/thread.component.css']
})
export class ThreadComponent implements OnInit {
  comments: Opinion[];

  constructor(private opinionFetcherService: OpinionFetcherService) { }

  ngOnInit() {
    this.opinionFetcherService.getComments().then(comments => {
      this.comments = comments;
    });
  }

}
