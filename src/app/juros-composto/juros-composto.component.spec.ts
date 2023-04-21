import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JurosCompostoComponent } from './juros-composto.component';

describe('JurosCompostoComponent', () => {
  let component: JurosCompostoComponent;
  let fixture: ComponentFixture<JurosCompostoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JurosCompostoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JurosCompostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
