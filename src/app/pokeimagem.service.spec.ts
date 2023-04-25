import { TestBed } from '@angular/core/testing';

import { PokeimagemService } from './pokeimagem.service';

describe('PokeimagemService', () => {
  let service: PokeimagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeimagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
