import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyObservable } from './my-observable';

describe('MyObservable', () => {
  let component: MyObservable;
  let fixture: ComponentFixture<MyObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyObservable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyObservable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
