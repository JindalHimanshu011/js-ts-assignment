import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reuseable } from './reuseable';

describe('Reuseable', () => {
  let component: Reuseable;
  let fixture: ComponentFixture<Reuseable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reuseable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reuseable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
