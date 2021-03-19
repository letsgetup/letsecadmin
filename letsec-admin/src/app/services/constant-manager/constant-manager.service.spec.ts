import { TestBed } from '@angular/core/testing';

import { ConstantManagerService } from './constant-manager.service';

describe('ConstantManagerService', () => {
  let service: ConstantManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstantManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
