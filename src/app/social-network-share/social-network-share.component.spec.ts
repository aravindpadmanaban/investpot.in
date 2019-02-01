import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworkShareComponent } from './social-network-share.component';

describe('SocialNetworkShareComponent', () => {
  let component: SocialNetworkShareComponent;
  let fixture: ComponentFixture<SocialNetworkShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialNetworkShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNetworkShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
