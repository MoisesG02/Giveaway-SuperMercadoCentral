import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifaComponent } from './rifa.component';

describe('RifaComponent', () => {
  let component: RifaComponent;
  let fixture: ComponentFixture<RifaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RifaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
