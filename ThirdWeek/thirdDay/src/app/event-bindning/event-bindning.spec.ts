import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindning } from './event-bindning';

describe('EventBindning', () => {
  let component: EventBindning;
  let fixture: ComponentFixture<EventBindning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBindning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBindning);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
