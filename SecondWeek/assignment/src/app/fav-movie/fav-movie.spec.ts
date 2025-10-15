import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavMovie } from './fav-movie';

describe('FavMovie', () => {
  let component: FavMovie;
  let fixture: ComponentFixture<FavMovie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavMovie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavMovie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
