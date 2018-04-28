import { TestBed, inject } from '@angular/core/testing';

import { UberServiceService } from './uber-service.service';

describe('UberServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UberServiceService]
    });
  });

  it('should be created', inject([UberServiceService], (service: UberServiceService) => {
    expect(service).toBeTruthy();
  }));
});
