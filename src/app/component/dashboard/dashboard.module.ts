import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../module/shared/shared.module';
import {Routes,RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {DashboardService} from '../../service/dashboard.service';
import { RateviewComponent } from '../../component/rateview/rateview.component';
import { SelectPricingComponent } from '../../component/select-pricing/select-pricing.component';

import { ProfilesComponent } from '../../component/profiles/profiles.component';
const route:Routes = [
  {path:"",component:DashboardComponent},
  {path:"Profile",component:ProfilesComponent}
]
@NgModule({
  declarations: [
    DashboardComponent,
    RateviewComponent,
    SelectPricingComponent,
    ProfilesComponent
],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(route)
  ],
  providers:[DashboardService]
})
export class DashboardModule { }
