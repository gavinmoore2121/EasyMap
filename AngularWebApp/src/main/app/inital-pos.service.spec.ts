import { TestBed } from '@angular/core/testing';

import { InitalPosService } from './inital-pos.service';

describe('InitalPosService', () => {
  let service: InitalPosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitalPosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
