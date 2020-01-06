import { Injectable } from '@angular/core';
import { RateView } from '../classes/RateView';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pricing } from '../classes/pricing';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http:HttpClient
  ) { }

  getpipelineData() :Observable<RateView[]> {
      return this.http.get<RateView[]>("./assets/pipeline.json");
  }

  getPricing() : Observable<Pricing> {
    return this.http.get<Pricing>("./assets/pricing.json");
  }
}

export interface Dashboard{
  getPricing() : void ;
  getpipelineData() : void;
  rateView:Array<RateView>;
  rateView1:RateView;
  pricing:Pricing;
}