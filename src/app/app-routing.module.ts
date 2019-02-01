import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InvestSearchBoxComponent } from './invest-search-box/invest-search-box.component';
import { HighchartGraphComponent } from './highchart-graph/highchart-graph.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InvestmentOptionsComponent } from './investment-options/investment-options.component';
import { InvestmentOptionDetailComponent } from './investment-option-detail/investment-option-detail.component';

const routes: Routes = [
  { path: '', component: InvestSearchBoxComponent },
  { path: 'invest-search-results', component: HighchartGraphComponent },
  { path: 'investment-options', component: InvestmentOptionsComponent },
  { path: 'investment-option-detail/:type', component: InvestmentOptionDetailComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes,
    {
      useHash: true
    }) ]
})
export class AppRoutingModule { }
