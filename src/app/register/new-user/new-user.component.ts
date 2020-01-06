import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, AbstractControl, ValidatorFn, ValidationErrors} from '@angular/forms'
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {ToasterService} from 'angular2-toaster';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {

  private newUser:FormGroup;
  formSubmited:boolean = false;
  constructor(
    private auth:AuthService,
    private route:Router,
    private toaster:ToasterService
  ) { 
    this.newUser = new FormGroup({
      name: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8)
      ])),
      email:new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.pattern("[^ @]*@[^ @]*")
        ])
      ),
      password: new FormControl("",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(8)
        ])
      )
    });
  }

 
  /**
   * 
   */
  submitForm(form:FormGroup) : void{
    this.formSubmited=  true;
    console.log(form);
    if(form.status === "VALID"){
        if(this.auth.addUser(form.value)){
         // this.toaster.pop("Thanks for registration","Registration");
            this.route.navigate(['/register/login']);
        }
    }
  }
  ngOnInit() {}

}
