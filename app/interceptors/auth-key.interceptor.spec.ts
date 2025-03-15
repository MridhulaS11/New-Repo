import { TestBed } from '@angular/core/testing';

import { AuthKeyInterceptor } from './auth-key.interceptor';

describe('AuthKeyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthKeyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthKeyInterceptor = TestBed.inject(AuthKeyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
