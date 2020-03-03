import { TestBed } from '@angular/core/testing';

import { CoopzService } from './coopz.service';

describe('CoopzService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoopzService = TestBed.get(CoopzService);
    expect(service).toBeTruthy();
  });
});
