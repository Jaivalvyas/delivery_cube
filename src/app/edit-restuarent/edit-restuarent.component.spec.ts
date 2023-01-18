import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRestuarentComponent } from './edit-restuarent.component';

describe('EditRestuarentComponent', () => {
  let component: EditRestuarentComponent;
  let fixture: ComponentFixture<EditRestuarentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRestuarentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRestuarentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
