import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KsdlComponent } from './ksdl.component';

describe('KsdlComponent', () => {
  let component: KsdlComponent;
  let fixture: ComponentFixture<KsdlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KsdlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KsdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
