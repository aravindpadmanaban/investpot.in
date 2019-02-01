import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { INVESTMENT_DETAIL } from '../db-temp/investment-detail';
import { INVESTMENT_TYPES } from '../db-temp/investment-types';

@Component({
  selector: 'app-investment-option-detail',
  templateUrl: './investment-option-detail.component.html',
  styleUrls: ['./investment-option-detail.component.css']
})
export class InvestmentOptionDetailComponent implements OnInit {

  investmentDetail = INVESTMENT_DETAIL;
  investmentDetailsForSelected: object;
  constructor(private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getInvestmentType();
  }

  getInvestmentType(): void {
    
    const investmentTypeParam = this.route.snapshot.params['type'];
    const investmentDetailsForSelect = this.investmentDetail.find(detail =>
      detail.type === investmentTypeParam
    );
    const investmentName = INVESTMENT_TYPES.find(investmentType => investmentType.type === investmentTypeParam);
    this.investmentDetailsForSelected = investmentDetailsForSelect;
    
    this.investmentDetailsForSelected['name'] = investmentName['name'];
    
  }

}
