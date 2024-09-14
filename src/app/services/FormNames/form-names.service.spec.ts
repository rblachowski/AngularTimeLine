import { TestBed } from '@angular/core/testing';

import { FormNamesService } from './form-names.service';

describe('FormNamesService', () => {
  let service: FormNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
