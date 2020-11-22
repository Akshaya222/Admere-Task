import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL:string="http://localhost:3000";
  private headers=new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }

  submitRegistration(user:any){
    return this.http.post(this.baseURL+'/user/register',user,{headers:this.headers});
  }
  login(user:any){
    return this.http.post(this.baseURL+'/user/login',user,{headers:this.headers});
  }

}
