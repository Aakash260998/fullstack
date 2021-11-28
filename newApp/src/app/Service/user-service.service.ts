import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../User';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
private url="http://localhost:8090"
private headers=new HttpHeaders().set('Content-Type','application/json')
  constructor(private http:HttpClient) { }
public addUser(user:any)  {
  return this.http.post(this.url+"/register",JSON.stringify(user),{headers:this.headers})
}
public loginUser(credential:any){
  return this.http.post(this.url+"/login",credential,{headers:this.headers})
}
public setUser(user:any){
  localStorage.setItem('user',JSON.stringify(user));
}
public getUser()
{
 let user=localStorage.getItem('user');
 if(user!=null){
   return JSON.parse(user);
 }
 else
 {
     return null;
 }
}
}
