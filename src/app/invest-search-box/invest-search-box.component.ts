import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { InvestSearchMain } from '../InvestSearchMain';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { INVESTMENT_TYPES } from '../db-temp/investment-types';

@Component({
  selector: 'app-invest-search-box',
  templateUrl: './invest-search-box.component.html',
  styleUrls: ['./invest-search-box.component.scss']
})
export class InvestSearchBoxComponent implements OnInit {

  years = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  modelInvest = new InvestSearchMain(10000, 5);
  submitted = false;
  investmentDetailRouter = 'investment-option-detail';
  investSearchForm: FormGroup;
  carouselOne: NgxCarousel;
  INVESTMENT_TYPES_LIST = INVESTMENT_TYPES;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  ngOnInit() {

    
    this.investSearchForm = new FormGroup({
      'amount': new FormControl(this.modelInvest.amount, [
        Validators.required,
        Validators.minLength(4),
        Validators.min(1000),
        Validators.max(10000000)
      ]),
      'years': new FormControl(this.modelInvest.years, [
        Validators.required,
      ])
    });
    
    this.carouselOne = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      interval: 2000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    };
  }

  get amount() { return this.investSearchForm.get('amount'); }

  onSubmitInvest() {
    this.router.navigate(['/invest-search-results'], {
      queryParams: { amount: this.modelInvest.amount, years: this.modelInvest.years }
    });
  }
}

