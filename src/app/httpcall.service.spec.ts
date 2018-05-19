import { TestBed, inject } from '@angular/core/testing';

import { HttpcallService } from './httpcall.service';

describe('HttpcallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpcallService]
    });
  });

  it('should be created', inject([HttpcallService], (service: HttpcallService) => {
    expect(service).toBeTruthy();
  }));
});
