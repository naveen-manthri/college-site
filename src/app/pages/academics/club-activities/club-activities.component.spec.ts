import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubActivitiesComponent } from './club-activities.component';

describe('ClubActivitiesComponent', () => {
  let component: ClubActivitiesComponent;
  let fixture: ComponentFixture<ClubActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
