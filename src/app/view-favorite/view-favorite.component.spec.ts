import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFavoriteComponent } from './view-favorite.component';

describe('ViewFavoriteComponent', () => {
  let component: ViewFavoriteComponent;
  let fixture: ComponentFixture<ViewFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFavoriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
