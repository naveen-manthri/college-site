import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkshayakalpaComponent } from './akshayakalpa.component';

describe('AkshayakalpaComponent', () => {
  let component: AkshayakalpaComponent;
  let fixture: ComponentFixture<AkshayakalpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkshayakalpaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkshayakalpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
