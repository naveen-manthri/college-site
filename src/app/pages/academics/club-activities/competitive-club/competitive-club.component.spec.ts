import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitiveClubComponent } from './competitive-club.component';

describe('CompetitiveClubComponent', () => {
  let component: CompetitiveClubComponent;
  let fixture: ComponentFixture<CompetitiveClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitiveClubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitiveClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
