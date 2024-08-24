import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configures the testing module
    apiService = TestBed.inject(ApiService); // Injects the ApiService
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });
});
