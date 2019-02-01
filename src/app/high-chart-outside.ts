import { Chart } from 'angular-highcharts';
import { INTEREST_RATES } from './db-temp/interest-data';
import { INVESTMENT_TYPES } from './db-temp/investment-types';
import { INVESTMENT_DETAIL } from './db-temp/investment-detail';
import { InterestRateCalculator } from './utils/InterestRateCalculator';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';

export class HighChartOutside {

  chart: Chart;
  investmentDetail = INVESTMENT_DETAIL;
  constructor(chart: Chart) {
    this.chart = chart;
  }

  calculateInterest(userInvestAmount: number, userInvestYears: number, interestRate: number) {
    const oneYearInterest = (userInvestAmount * interestRate / 100);
    const interestAmountOnly = Math.round(oneYearInterest * userInvestYears);
    const totalAmount = userInvestAmount + interestAmountOnly;
    return interestAmountOnly;
    // return totalAmount;
  }

  getInterestTypeName(interestTypeSku) {
    for (const interestType of INVESTMENT_TYPES) {
      if (interestType.type === interestTypeSku) {
        return interestType.shortName;
      }
    }
  }

  getInvestmentDetailOneLiner(investmentType) {
    return this.investmentDetail.find(investmentDet => investmentDet.type === investmentType);
  }

  init(userInvestAmount: number, userInvestYears: number) {
    const interestRateCalculator = new InterestRateCalculator(userInvestAmount, userInvestYears);
    const graphCategories = [];
    const graphData = [];
    
    INTEREST_RATES.sort(function (a, b) {
      return parseFloat(a.interest[userInvestYears]) - parseFloat(b.interest[userInvestYears]);
    });

    INTEREST_RATES.reverse();
    // for (const interestRate of INTEREST_RATES) {
    //   if (!graphCategories.includes(interestRate.type)) {
    //     graphCategories.push(interestRate.type);
    //     const interestRateName = INVESTMENT_TYPES.filter(function (investmentType) {
    //       return investmentType.type === interestRate.type;
    //     });
    //     const interestRateForSelectedYear = interestRate.interest[userInvestYears];
    //     const interestAmountPercentage = interestRate.interest[userInvestYears] * userInvestYears;
    //     const totalAmount = this.calculateInterest(userInvestAmount, userInvestYears, interestRateForSelectedYear);
        
    //     graphData.push({
    //       'name': interestRateName[0].name,
    //       'shortName': interestRateName[0].shortName,
    //       'type': interestRateName[0].type,
    //       'interestPercentage': interestAmountPercentage.toFixed(2),
    //       'oneLiner': this.getInvestmentDetailOneLiner(interestRateName[0].type)['oneLineDesc']
    //     });
    //     graphData.push({
    //       'y': totalAmount,
    //       'oneLiner': 'oneLiner'
    //     });
    //   }
    // }


    for (const investmentType of INVESTMENT_TYPES) {
      const interestDetails = interestRateCalculator.getInterestByInterestType(investmentType['type']);
      graphData.push({
        'name': investmentType.name,
        'shortName': investmentType.shortName,
        'type': investmentType.type,
        'interestPercentage': interestDetails['interestPercent'],
        'oneLiner': this.getInvestmentDetailOneLiner(investmentType.type)['oneLineDesc'],
        'y': Math.round(interestDetails['totalAmount'])
      });
      graphData.sort(function (a, b) {
        return parseFloat(a.y) - parseFloat(b.y);
      });
      graphData.reverse();
    }

    
    const chart = new Chart({
      chart: {
        type: 'bar'
        // type: 'column'
      },
      xAxis: {
        categories: graphData,
        labels: {
          useHTML: true,
          formatter: function () {
            const routerLink = '/#/investment-option-detail/' + this.value['type'];
            return '<a href="' + routerLink + '">' +
              this.value['shortName'] + '</a> - ' + this.value['interestPercentage'] + '%';
          }
        }
      },

      yAxis: {
        labels: {
          format: '{value}'
        },
        gridLineWidth: 0.5
      },

      plotOptions: {
        series: {
          animation: {
            duration: 1000
          },
          shadow: true,
          dataLabels: {
            enabled: true,
            format: '\u20B9 {y}',
            // useHTML: true
          }
        },
      },
      title: {
        text: 'Maximum returns - \u20B9' + graphData[0]['y'].toLocaleString()
      },
      subtitle: {
        text: 'Invested amount - \u20B9' + userInvestAmount.toLocaleString()
          + '; Period - ' + userInvestYears + ' year(s)',
      },

      series: [{
        name: 'Interest amount',
        data: graphData
      }],
      tooltip: {
        backgroundColor: {
          linearGradient: [0, 0, 0, 60],
          stops: [
              [0, '#FFFFFF'],
              [1, '#E0E0E0']
          ]
      },
      borderWidth: 1,
      borderColor: '#AAA',
        formatter: function () {
          const routerLink = '/#/investment-option-detail/' + this.x['type'];
          const tooltipHtml = '<b>' + this.x.name + '</b><br>' +
            '<p>' + this.x.oneLiner + '</p><br>';
          return tooltipHtml;
        }
      },

      credits: {
        enabled: false
      }
    });

    return chart;
  }
}
