import { async, TestBed } from '@angular/core/testing';
import { NotFoundModule } from './not-found.module';

describe('NotFoundModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NotFoundModule]
    }).compileComponents();
  }));

  it('should create not found module', () => {
    expect(NotFoundModule).toBeDefined();
  });
});
