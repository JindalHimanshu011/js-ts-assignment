import { TestBed } from '@angular/core/testing';

import { UpdateData } from './update-data';

describe('UpdateData', () => {
  let service: UpdateData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
