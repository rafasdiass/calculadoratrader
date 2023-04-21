import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaytraderFormComponent } from './daytrader-form.component';

describe('DaytraderFormComponent', () => {
  let component: DaytraderFormComponent;
  let fixture: ComponentFixture<DaytraderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaytraderFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaytraderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
