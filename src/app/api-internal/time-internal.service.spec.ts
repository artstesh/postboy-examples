import { TestBed } from '@angular/core/testing';

import { TimeInternalService } from './time-internal.service';

describe('TimeInternalService', () => {
  let service: TimeInternalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeInternalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
