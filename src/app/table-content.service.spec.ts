import { TestBed, inject } from '@angular/core/testing';

import { TableContentService } from './table-content.service';

describe('TableContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableContentService]
    });
  });

  it('should be created', inject([TableContentService], (service: TableContentService) => {
    expect(service).toBeTruthy();
  }));
});
