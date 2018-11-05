import { TestBed, inject } from '@angular/core/testing';

import { CusineService } from './cusine.service';

describe('CusineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CusineService]
    });
  });

  it('should be created', inject([CusineService], (service: CusineService) => {
    expect(service).toBeTruthy();
  }));
});
