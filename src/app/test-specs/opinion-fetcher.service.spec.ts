/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OpinionFetcherService } from './opinion-fetcher.service';

describe('OpinionFetcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpinionFetcherService]
    });
  });

  it('should ...', inject([OpinionFetcherService], (service: OpinionFetcherService) => {
    expect(service).toBeTruthy();
  }));
});
