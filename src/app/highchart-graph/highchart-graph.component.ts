import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HighChartOutside } from '../high-chart-outside'
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-highchart-graph',
  templateUrl: './highchart-graph.component.html',
  styleUrls: ['./highchart-graph.component.scss']
})
export class HighchartGraphComponent implements OnInit {

  // chart = this.init();
chart: Chart;
  userInvestAmount: number;
  userInvestYears: number;
  relatedYears: Array<number> ;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  this.chart = this.init();
  }

  init() {
    this.route
      .queryParamMap
      .subscribe(params => {
        if ((+params.get('amount') === NaN) || (+params.get('amount') === 0)) {
          this.userInvestAmount = 100000;
        } else {
          this.userInvestAmount = +params.get('amount');
        }
        if ((+params.get('years') === NaN) || (+params.get('years') === 0)) {
          this.userInvestYears = 5;
        } else {
          this.userInvestYears = +params.get('years');
        }
      });

    
    
this.relatedYears = [1, 2, 3, 5, 8, 10, 15];
if (!this.relatedYears.includes(this.userInvestYears)) {
  this.relatedYears.push(this.userInvestYears);
  this.relatedYears.sort(function(a, b){
    return a - b;
  });
}

    const highChartOutside = new HighChartOutside(this.chart);
    return highChartOutside.init(this.userInvestAmount, this.userInvestYears);
  }

  relatedYearNavigate(event: any) {
  
    // this.router.navigate(['/invest-search-results'], {
    //   queryParams: { amount: this.userInvestAmount, years: this.userInvestYears }
    // });
    // window.location.reload();
  }

}
