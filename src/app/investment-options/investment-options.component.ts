import { Component, OnInit } from '@angular/core';
import { INVESTMENT_DETAIL } from '../db-temp/investment-detail';
import { INVESTMENT_TYPES } from '../db-temp/investment-types';

@Component({
  selector: 'app-investment-options',
  templateUrl: './investment-options.component.html',
  styleUrls: ['./investment-options.component.scss']
})
export class InvestmentOptionsComponent implements OnInit {
  MORE_DETAIL_TEXT = 'Interest rates';
  MORE_DETAIL_TEXT_ICON = 'description';
  investmentDetail = INVESTMENT_DETAIL;
  investmentTypes = INVESTMENT_TYPES;

  constructor() { }

  ngOnInit() {

    for (const investmentType of this.investmentTypes) {
for (const investmentDet of this.investmentDetail) {
    if (investmentDet['type'] === investmentType['type']) {
      investmentDet['name'] = investmentType['name']
    }
  }
 
  }

}
}