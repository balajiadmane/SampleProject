import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';


import {LoginComponent} from './login/login.component';
import {NewUserComponent} from './new-user/new-user.component';
import {RouterModule,Routes} from '@angular/router';
import {SharedModule} from '../module/shared/shared.module';
const route:Routes = [
  {path:'login',component:LoginComponent},
  {path:'newUser',component:NewUserComponent}
]
@NgModule({
  declarations: [
    LoginComponent,
    NewUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(route)
  ]
})
export class RegisterModule { }

@Component({
  selector: 'app-register',
  template: `
  <toaster-container></toaster-container>
  `
})
export class RegisterCom {

}
