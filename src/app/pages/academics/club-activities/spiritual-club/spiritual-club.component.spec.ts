import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritualClubComponent } from './spiritual-club.component';

describe('SpiritualClubComponent', () => {
  let component: SpiritualClubComponent;
  let fixture: ComponentFixture<SpiritualClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiritualClubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpiritualClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
