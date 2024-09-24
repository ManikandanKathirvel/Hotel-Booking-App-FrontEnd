import { Injectable } from '@angular/core';
const TOKEN='token';
const USER='user';
@Injectable({
  providedIn: 'root'
})

export class UserStorageService {


  constructor() { }
  static saveToken(token:string):void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN,token);
  }
  static saveUser(user:any){
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER,JSON.stringify(user));
  }
  static getToken(){
    return localStorage.getItem(TOKEN);
  }
  static getUser(){
    return JSON.parse(localStorage.getItem(USER));
  }
  static getId(){
    const user=this.getUser();
    if(user==null){
      return '';
    }
    return user.id;
  }
  static getRole(){
    const user=this.getUser();
    if(user==null){
      return '';
    }
    return user.role;
  }
  static isAdminLoggedIn():boolean{
    if(this.getToken===null){
        return false;
    }
    const role:String=this.getRole();
    return role=='ADMIN';
  }
  static isCustomerLoggedIn(){
    if(this.getToken===null){
      return false;
    }
    let role:string=this.getRole();
    return role=='CUSTOMER';
  }
  static signOut(){
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }
  
}
