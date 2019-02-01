import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartGraphComponent } from './highchart-graph.component';

describe('HighchartGraphComponent', () => {
  let component: HighchartGraphComponent;
  let fixture: ComponentFixture<HighchartGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
