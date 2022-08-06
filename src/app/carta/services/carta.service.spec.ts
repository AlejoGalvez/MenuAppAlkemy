import { TestBed } from '@angular/core/testing';
import {  HttpClientModule } from '@angular/common/http';
import { CartaService } from './carta.service';

describe('CartaService', () => {
  let service: CartaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule]
    });
    service = TestBed.inject(CartaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
