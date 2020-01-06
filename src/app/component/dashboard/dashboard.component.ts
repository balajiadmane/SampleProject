import { Component, OnInit } from '@angular/core';
import { DashboardService, Dashboard } from '../../service/dashboard.service';
import { RateView, CardBalance, PipeLine } from 'src/app/classes/RateView';
import { Pricing } from 'src/app/classes/pricing';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  rateView: Array<RateView> = [];
  rateView1: RateView;
  pricing: Pricing;
  constructor(private pipeService: DashboardService) {}
  /**
   * get pricing 
   * hong data
   */
  getPricing(): void {
    this.pipeService.getPricing().subscribe(
      (response: Pricing) => {
        this.pricing = response;
      }
    )
  }

  ngOnInit() {
    this.getPricing();

  }

}
