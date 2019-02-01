import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { checkbox as mdcCheckbox } from 'material-components-web';
import mdcAutoInit from '@material/auto-init';
import { MDCTextField } from '@material/textfield';
import { MDCToolbar } from '@material/toolbar';
import { MDCTemporaryDrawer } from '@material/drawer';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  tabLinks = [
    { label: 'Sun', linking: '/heroes/11' },
    { label: 'Rain', linking: '/heroes/12' },
    { label: 'Fog', linking: '/heroes/13' },
  ];

  mDCTemporaryDrawer: MDCTemporaryDrawer;

  constructor(private router: Router) { }

  ngOnInit() {
    const toolbar1 = new MDCToolbar(document.querySelector('.mdc-toolbar'));
    toolbar1.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');
    const drawerEl = document.querySelector('.mdc-drawer');
    this.mDCTemporaryDrawer = new MDCTemporaryDrawer(drawerEl);
    document.querySelector('.mdc-toolbar__menu-icon').addEventListener('click', () =>
      this.mDCTemporaryDrawer.open = true
    );
    document.querySelector('#drawer-navbar .mdc-list-item').addEventListener('click', () =>
      this.mDCTemporaryDrawer.open = false
    );
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

  }

// To be fixed. Receiving router id also as params. Should be taken from event or other event.
// Temporary fix for navigation issue. 
  onDrawerClickClose(event, routerid) {
    console.log('in onDrawerMenuIconClick');
    console.log(event);
    this.mDCTemporaryDrawer.open = false;
    console.log("drawer closed");
    this.router.navigate([routerid]);
  }
  onDrawerMenuIconClick(event) {
    this.mDCTemporaryDrawer.open = true;
  }
}