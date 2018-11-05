import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { cusine } from './home/cusine_class';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private adminhome_url="http://localhost:3000/AdminHome/";
  private cusine_url="http://localhost:3000/cusine/";


  constructor(private _http:HttpClient) { }
  deleteAllcusine(item:cusine[]){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.cusine_url,body,{headers:head1});

  }
  getAllOrder()
  {
      return this._http.get(this.adminhome_url);
  }
  updateOrder(bill_no){
    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.put(this.adminhome_url+bill_no,{headers:head1});
  }
  addcusine(cusine_name){
    let body=JSON.stringify(cusine_name);
    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.cusine_url+cusine_name,{headers:head1});

  }

}
