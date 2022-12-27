import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantPremiosComponent } from './mant-premios.component';

describe('MantPremiosComponent', () => {
  let component: MantPremiosComponent;
  let fixture: ComponentFixture<MantPremiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantPremiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantPremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
