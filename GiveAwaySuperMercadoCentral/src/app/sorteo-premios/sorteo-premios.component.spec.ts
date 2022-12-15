import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteoPremiosComponent } from './sorteo-premios.component';

describe('SorteoPremiosComponent', () => {
  let component: SorteoPremiosComponent;
  let fixture: ComponentFixture<SorteoPremiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorteoPremiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorteoPremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
