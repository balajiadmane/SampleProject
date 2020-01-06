import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /**
   * Add user
   */
  addUser(user:User) : boolean{
    if(window.localStorage.getItem('users')!=null){
        let userList:Array<User>;
          userList = JSON.parse(window.localStorage.getItem('users')).userList;
          userList.push(user);
     window.localStorage.setItem("users",JSON.stringify({userList:[user]}));
    }else{
      window.localStorage.setItem("users",JSON.stringify({userList:[user]}));
    }
    return true;
  } 
  /**
 * check user
 */
loginUser(userForm:any) : Observable<Message> {
  return new Observable((message)=>{
    if(window.localStorage.getItem('users')!=null){
      let userList:Array<User>;
      userList = JSON.parse(window.localStorage.getItem('users')).userList[0];
            if(userList['email'] ==userForm.email && userList['password'] == userForm.password){
              window.localStorage.setItem('userLoggedin',userForm.email);
              message.next({message:"User is valid",status:true});
            }else{
             message.next({message:"User is not valid",status:false});
            }
    }else{
      message.next({message:"User is not valid",status:false});
    }
  })
}
/**
 * is logged
 */
isLoggedIn() : boolean {
    return   window.localStorage.getItem('userLoggedin') !=null && window.localStorage.getItem('userLoggedin') !='';
}
/**
 * get user
 */
getUser() : Observable<any>{
  return new Observable((user)=>{
    if(window.localStorage.getItem('userLoggedin')!=null){
      user.next( JSON.parse(window.localStorage.getItem('users')).userList[0]);
    }else{
      user.next({message:"User not found"});
    }
  })
}
/**
 * Logout
 */
logout() : boolean {
  if(window.localStorage.getItem('users')!=null){
    window.localStorage.setItem("userLoggedin","");
      return true;
  }else{
      return false;
  } 
}
}

export class User{
  name:String;
  email:String;
  password:String;
}

export class Message {
  message:String="";
  status:boolean=false;
}