import { TestBed } from '@angular/core/testing';

import { ShoppingKingFormService } from './shopping-king-form.service';

describe('ShoppingKingFormService', () => {
  let service: ShoppingKingFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingKingFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
