import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceAndConsultingClubComponent } from './finance-and-consulting-club.component';

describe('FinanceAndConsultingClubComponent', () => {
  let component: FinanceAndConsultingClubComponent;
  let fixture: ComponentFixture<FinanceAndConsultingClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceAndConsultingClubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceAndConsultingClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
