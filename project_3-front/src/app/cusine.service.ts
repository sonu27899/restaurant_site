import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { cusine_dish } from './home/cusine_dish_class';


@Injectable({
  providedIn: 'root'
})
export class CusineService {
  private cusine_url="http://localhost:3000/cusine/";
  private bill_url="http://localhost:3000/bill/";
  private bill_details_url="http://localhost:3000/bill_details/";
  private past_order_url="http://localhost:3000/pastorder/";
  private past_order_details_url="http://localhost:3000/past_order_details/";
  private dish_url="http://localhost:3000/dish/";
  private deleteAlldish_url="http://localhost:3000/deleteAlldish/";
  constructor(private _http:HttpClient) { }
  getdish()
  {
    return this._http.get(this.dish_url);
  }
  deleteAlldish(item:cusine_dish[]){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.deleteAlldish_url,body,{headers:head1});

  }
  adddish(item:FormData)
  {
    return this._http.post(this.dish_url,item);
  }
  getCusine()
  {
      return this._http.get(this.cusine_url);
  }
  getCusinesByName(cusine_name:string)
  {
    return this._http.get(this.cusine_url+cusine_name);
  }
  getBill()
  {
    return this._http.get(this.bill_url);
  }
  insertBill(item)
  {
    console.log(item);
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

     return this._http.post(this.bill_url,body,{headers:head1});
  }
  insertBillDetails(item)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.bill_details_url,body,{headers:head1});
  }
  getPastOrder(id)
  {
    return this._http.get(this.past_order_url+id);
  }
  getPastOrderDetails(id)
  {
    return this._http.get(this.past_order_details_url+id);
  }
}
