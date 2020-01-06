import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';
import {AuthService} from '../service/auth.service';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
  ],
})
export class ConfirmComponent implements OnInit {
  bounce: any;
  routeList:Array<any> = [];
  constructor(
    private auth:AuthService
  ) {
      if(this.auth.isLoggedIn()){
        this.routeList.push({name:'Dashboard',route:'/dashboard'});
        this.routeList.push({name:"Profile",route:'/dashboard/Profile'});
      }else{
          this.routeList.push({name:'Register',route:'/register/newUser'});
        this.routeList.push({name:"login",route:'/register/login'});
      }
   }

  ngOnInit() {
  }

}
