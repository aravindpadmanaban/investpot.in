import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectWthUsComponent } from './connect-wth-us.component';

describe('ConnectWthUsComponent', () => {
  let component: ConnectWthUsComponent;
  let fixture: ComponentFixture<ConnectWthUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectWthUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectWthUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
