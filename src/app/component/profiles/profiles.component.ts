import { Component, OnInit } from '@angular/core';
import { zoomInUp } from 'ng-animate';
import { trigger, transition, useAnimation } from '@angular/animations';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],
  animations: [
    trigger('zoom', [transition('* => *', useAnimation(zoomInUp))])
  ],
})
export class ProfilesComponent implements OnInit {
  animation:any;
  user:User = new User();
  constructor(
    private auth:AuthService,
    private router:Router
  ) {
   // console.log(this.auth.getUser());
    this.auth.getUser().subscribe(
      (user)=>{
        console.log(user)
        this.user.name = user.name+" ;-)";
        this.user.Department  = "Computer";
      }
    )
   
   }
/**
 * log out
 */
logout() : void {
  this.auth.logout();
  this.router.navigate(['/'])
}
  ngOnInit() {
  }

}


export class User {
  name:String;
  Department:String;
}