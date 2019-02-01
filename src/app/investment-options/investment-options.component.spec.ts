import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentOptionsComponent } from './investment-options.component';

describe('InvestmentOptionsComponent', () => {
  let component: InvestmentOptionsComponent;
  let fixture: ComponentFixture<InvestmentOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
