import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAttrBinding } from './class-attr-binding';

describe('ClassAttrBinding', () => {
  let component: ClassAttrBinding;
  let fixture: ComponentFixture<ClassAttrBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassAttrBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassAttrBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
