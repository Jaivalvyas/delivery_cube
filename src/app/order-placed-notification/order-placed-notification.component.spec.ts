import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPlacedNotificationComponent } from './order-placed-notification.component';

describe('OrderPlacedNotificationComponent', () => {
  let component: OrderPlacedNotificationComponent;
  let fixture: ComponentFixture<OrderPlacedNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPlacedNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderPlacedNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
