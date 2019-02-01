import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestSearchBoxComponent } from './invest-search-box.component';

describe('InvestSearchBoxComponent', () => {
  let component: InvestSearchBoxComponent;
  let fixture: ComponentFixture<InvestSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
