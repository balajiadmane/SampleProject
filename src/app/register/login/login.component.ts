import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {AuthService,Message} from '../../service/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  private loginForm:FormGroup;
  formSubmit:boolean = false;
  private message:Message = new Message;
  constructor(
    private auth:AuthService,
    private route:Router
  ) { 
   
    this.loginForm = new FormGroup({
      email:new FormControl("",Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    })
  }
  /**
   * Submit login form
   */
  submitForm(form) : void {
    this.formSubmit = true;
    console.log(form)
    if(form.status === "VALID"){
      this.auth.loginUser(form.value).subscribe(
        (response)=>{
          console.log(response);
          this.message = response;
          if(this.message.status === true){
              this.route.navigate(['/dashboard']);
          }
        }
      )
    }
  }
  ngOnInit() {}

}
