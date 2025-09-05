import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyDayComponent } from './dairy-day.component';

describe('DairyDayComponent', () => {
  let component: DairyDayComponent;
  let fixture: ComponentFixture<DairyDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DairyDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DairyDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
