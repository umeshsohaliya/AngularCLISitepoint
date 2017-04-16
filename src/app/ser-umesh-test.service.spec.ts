import { TestBed, inject } from '@angular/core/testing';

import { SerUmeshTestService } from './ser-umesh-test.service';

describe('SerUmeshTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerUmeshTestService]
    });
  });

  it('should ...', inject([SerUmeshTestService], (service: SerUmeshTestService) => {
    expect(service).toBeTruthy();
  }));
});
