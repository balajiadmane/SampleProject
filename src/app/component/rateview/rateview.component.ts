import { Component, OnInit , Input } from '@angular/core';
import { RateView } from 'src/app/classes/RateView';
import { fadeIn } from 'ng-animate';
import { trigger, transition, useAnimation } from '@angular/animations';
import {FormGroup,FormControl, Validators} from '@angular/forms';

import { DashboardService, Dashboard } from '../../service/dashboard.service';
@Component({
  selector: 'app-rateview',
  templateUrl: './rateview.component.html',
  styleUrls: ['./rateview.component.css'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ],
})
export class RateviewComponent implements OnInit {
  animation:any;
  rateView:Array<RateView> = [];
  rateViewData:RateView =  new RateView();
  isFormValid = false;
  rateViewForm:FormGroup;
  constructor(
    private service:DashboardService
  ) {
    
   }

  filterPipe(value) : void {
     this.rateViewData = this.rateView.filter(pipe=>pipe.description === value)[0];
  }
    /**
   * get pipeline data
   * tong data
   */
  getpipelineData(): void {
    this.service.getpipelineData().subscribe(
      (response: RateView[]) => {
        this.rateView = response;
        this.rateViewData = response[0];
        this.builReactiveForm();
      }
    )
  }
  ngOnInit() {
    this.getpipelineData();
    this.builReactiveForm();
  }

  /**
   * 
   */
  submitForm(form) : void{
    console.log(this.rateViewForm);
    for(let key in this.rateViewData){
        if(form[key] == ""){
            this.isFormValid = true;
        }
      for(let keyin in this.rateViewData[key]){
            if(form[keyin] == ""){
              this.isFormValid = true;
            }
      }
    }

  }
  builReactiveForm() : void {
    let form = {};
    console.log(this.rateViewData);
    for(let key in this.rateViewData){
      console.log(this.rateViewData[key])
      form[key] =  new FormControl(this.rateViewData[key],Validators.compose([
        Validators.required
      ]));
        //----->
          for(let keyin in this.rateViewData[key]){
            form[keyin] =  new FormControl("",Validators.compose([
              Validators.required
            ]));
          }
    }
    this.rateViewForm =new FormGroup(form);
  }

}
