import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brixx } from './brixx';

describe('Brixx', () => {
  let component: Brixx;
  let fixture: ComponentFixture<Brixx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Brixx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Brixx);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
