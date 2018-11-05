import { Component, OnInit } from '@angular/core';
import { cusine } from './cusine_class';
import { dish } from './dish_class';
import { cusine_dish } from './cusine_dish_class';
import { CusineService } from '../cusine.service';
import { bill_details } from './bii_details_class';
import { Router } from '@angular/router';
import { MatTableDataSource } from '../../../node_modules/@angular/material';
import { bill } from './bill_class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['Image','Name','Qty','Price','Remark'];
  dataSource=new MatTableDataSource();

  cusine_arr: cusine[] = [];
  dish_arr: dish[] = [];
  cusine_dish_arr: cusine_dish[] = [];
  bill: cusine_dish[] = [];
  qtyarr: number[] = [];
  pricearr: number[] = [];
  remarkarr:string[]=[];
  amount:number=0;
  bill_details1:bill_details[]=[];
  x:number;

  constructor(private _ser: CusineService,private _route:Router) { }
  onClick(cusine_name) {
    this._ser.getCusinesByName(cusine_name).subscribe((data: cusine_dish[]) => {
      console.log(data);
      this.cusine_dish_arr = data;
    });
  }
  onChange(item: cusine_dish, i: number) {
    if(this.qtyarr[i]<1)
    {
      alert("Item can not be 0");
      this.qtyarr[i]=1;

    }
    this.pricearr[i] = this.qtyarr[i] * item.dish_price;
    this.amount=0;
    for(this.x=0;this.x<this.bill.length;this.x++)
      {
        this.amount+=this.pricearr[this.x];
      }
  }
  onDelete(i)
  {
    this.bill.splice(i,1);

    this.pricearr.splice(i,1);
    this.qtyarr.splice(i,1);
    this.remarkarr.splice(i,1);
    this.amount=0;
    for(this.x=0;this.x<this.pricearr.length;this.x++)
    {
      this.amount+=this.pricearr[this.x];
    }

  }
  ondish(item: cusine_dish, i: number) {
    if (this.bill.find(x => x.dish_id == item.dish_id)) {
      alert("Item is alrady added");
    } else {
      this.bill.push(item);
      console.log(this.bill);
      this.dataSource.data=this.bill;
      console.log(this.dataSource.data);
      this.qtyarr.push(1);
      this.pricearr.push(item.dish_price);
      this.remarkarr.push(" ");
      this.amount=0;

      for(this.x=0;this.x<this.pricearr.length;this.x++)
      {
        this.amount+=this.pricearr[this.x];
      }
    }
  }

  id:number;
  i:number=0;
  arr1:bill_details[]=[];

  onClickPayment()
  {
    this._ser.insertBill(new bill(this.amount,localStorage.getItem('id'))).subscribe(
      (data:any)=>
      {
        for(this.i=0;this.i<this.bill.length;this.i++)
        {
          this.arr1.push(new bill_details(this.bill[this.i].dish_id,this.qtyarr[this.i],this.pricearr[this.i]," "+this.remarkarr[this.i],data.insertId));

        }

          this._ser.insertBillDetails(this.arr1).subscribe(
          (data:any)=>
          {
            alert("Record added in table successfully");
            this.bill.splice(0,this.bill.length);
            this.pricearr.splice(0,this.pricearr.length);
            this.qtyarr.splice(0,this.qtyarr.length);
            this.remarkarr.splice(0,this.remarkarr.length);
            this.amount=0;
          });

        });


  }
  onpastorder()
  {
    this._route.navigate(['/pastorder']);
  }

  ngOnInit() {

    this._ser.getCusine().subscribe((data: cusine[]) => {
      console.log(data);
      this.cusine_arr = data;
    });
    this._ser.getCusinesByName("pizza").subscribe((data: cusine_dish[]) => {
      console.log(data);
      this.cusine_dish_arr = data;
    });

  }

}
