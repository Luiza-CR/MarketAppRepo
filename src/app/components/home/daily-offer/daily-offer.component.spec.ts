import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyOfferComponent } from './daily-offer.component';

describe('DailyOfferComponent', () => {
  let component: DailyOfferComponent;
  let fixture: ComponentFixture<DailyOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DailyOfferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
