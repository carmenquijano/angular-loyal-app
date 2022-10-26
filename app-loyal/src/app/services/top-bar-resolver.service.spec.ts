import { TestBed } from '@angular/core/testing';

import { TopBarResolverService } from './top-bar-resolver.service';

describe('TopBarResolverService', () => {
  let service: TopBarResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopBarResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
