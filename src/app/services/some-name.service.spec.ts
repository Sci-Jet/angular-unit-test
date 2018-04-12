import { TestBed, inject } from '@angular/core/testing';

import { SomeNameService } from './some-name.service';

describe('SomeNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SomeNameService]
    });
  });

  it('should be created', inject([SomeNameService], (service: SomeNameService) => {
    expect(service).toBeTruthy();
    expect(service.getNameById(2)).toBe('Vincent Wang');
  }));
});
