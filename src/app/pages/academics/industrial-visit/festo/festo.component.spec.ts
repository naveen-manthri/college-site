import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestoComponent } from './festo.component';

describe('FestoComponent', () => {
  let component: FestoComponent;
  let fixture: ComponentFixture<FestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FestoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
