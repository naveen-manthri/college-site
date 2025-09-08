import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateLectureSeriesComponent } from './corporate-lecture-series.component';

describe('CorporateLectureSeriesComponent', () => {
  let component: CorporateLectureSeriesComponent;
  let fixture: ComponentFixture<CorporateLectureSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateLectureSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateLectureSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
