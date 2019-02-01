import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentOptionDetailComponent } from './investment-option-detail.component';

describe('InvestmentOptionDetailComponent', () => {
  let component: InvestmentOptionDetailComponent;
  let fixture: ComponentFixture<InvestmentOptionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentOptionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentOptionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
