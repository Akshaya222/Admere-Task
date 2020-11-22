import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private baseURL:string="http://localhost:3000";
  private headers=new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }

  submitRegistration(vendor:any){
    return this.http.post(this.baseURL+'/vendor/register',vendor,{headers:this.headers});
  }
  login(vendor:any){
    return this.http.post(this.baseURL+'/vendor/login',vendor,{headers:this.headers});
  }
  getItems(){
    return this.http.get(this.baseURL+'/vendor/list');
  }

}
