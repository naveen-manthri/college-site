import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialVisitComponent } from './industrial-visit.component';

describe('IndustrialVisitComponent', () => {
  let component: IndustrialVisitComponent;
  let fixture: ComponentFixture<IndustrialVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustrialVisitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrialVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
