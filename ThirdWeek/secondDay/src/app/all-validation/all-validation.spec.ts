import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllValidation } from './all-validation';

describe('AllValidation', () => {
  let component: AllValidation;
  let fixture: ComponentFixture<AllValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllValidation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllValidation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
