import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestuarentComponent } from './add-restuarent.component';

describe('AddRestuarentComponent', () => {
  let component: AddRestuarentComponent;
  let fixture: ComponentFixture<AddRestuarentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRestuarentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRestuarentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
