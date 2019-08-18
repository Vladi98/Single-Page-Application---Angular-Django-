import { TestBed } from '@angular/core/testing';

import { FurnituresService } from './furnitures.service';

describe('FurnituresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FurnituresService = TestBed.get(FurnituresService);
    expect(service).toBeTruthy();
  });
});
