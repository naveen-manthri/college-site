import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaglesUnboundComponent } from './eagles-unbound.component';

describe('EaglesUnboundComponent', () => {
  let component: EaglesUnboundComponent;
  let fixture: ComponentFixture<EaglesUnboundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaglesUnboundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EaglesUnboundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
