import { TestBed, inject } from '@angular/core/testing';

import { MyService } from './my.service';

describe('MyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyService]
    });
  });

  it('should be created', inject([MyService], (service: MyService) => {
    expect(service).toBeTruthy();
  }));
});
