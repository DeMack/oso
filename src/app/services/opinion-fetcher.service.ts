import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Opinion} from '../models/opinion';

@Injectable()
export class OpinionFetcherService {
  private commentsUrl = 'api/comments';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getComments(): Promise<Opinion[]> {
    return this.http.get(this.commentsUrl).toPromise()
      .then(res => <Opinion[]> res.json().data)
      .then(data => { return data; })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An Error occured: ', error);
    return Promise.reject(error.message || error);
  }
}
