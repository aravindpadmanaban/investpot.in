import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InvestSearchBoxComponent } from './invest-search-box/invest-search-box.component';

import { AmexioWidgetModule, CommonHttpService } from 'amexio-ng-extensions';
import { DxButtonModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { HighchartGraphComponent } from './highchart-graph/highchart-graph.component';

import {MDCTab, MDCTabFoundation} from '@material/tabs';
import {MDCTabBar, MDCTabBarFoundation} from '@material/tabs';
import {MDCTabBarScroller, MDCTabBarFoundationScroller} from '@material/tabs';
import { NgxCarouselModule } from 'ngx-carousel';
import 'autotrack/lib/plugins/url-change-tracker';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InvestmentOptionsComponent } from './investment-options/investment-options.component';
import { InvestmentOptionDetailComponent } from './investment-option-detail/investment-option-detail.component';
import { ConnectWthUsComponent } from './connect-wth-us/connect-wth-us.component';
import { SocialNetworkShareComponent } from './social-network-share/social-network-share.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InvestSearchBoxComponent,
    HighchartGraphComponent,
    FooterComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    AboutUsComponent,
    InvestmentOptionsComponent,
    InvestmentOptionDetailComponent,
    ConnectWthUsComponent,
    SocialNetworkShareComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AmexioWidgetModule,
    DxButtonModule,
    NgxChartsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    ChartModule,
    NgxCarouselModule

  ],
  providers: [CommonHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
