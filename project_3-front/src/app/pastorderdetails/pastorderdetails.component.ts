import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CusineService } from "../cusine.service";
import { order_details } from '../pastorderdetails/order_details_class';
import { MatTableDataSource,MatPaginator } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-pastorderdetails',
  templateUrl: './pastorderdetails.component.html',
  styleUrls: ['./pastorderdetails.component.css']
})
export class PastorderdetailsComponent implements OnInit {
  id:number;
  details_arr:order_details[]=[];
  displayedColumns: string[] = ['Item','Qty','Total'];
  dataSource=new MatTableDataSource();
  constructor(public _actroute:ActivatedRoute,public _ser:CusineService,public _router:Router) { }

  onclickBack()
  {
    this._router.navigate(['pastorder']);
  }
  ngOnInit() {
    this.id=this._actroute.snapshot.params['bill_no'];
    this._ser.getPastOrderDetails(this.id).subscribe(
      (data:order_details[])=>
      {
        this.details_arr=data;
        console.log(this.details_arr);
        this.dataSource.data=this.details_arr;
      }
    );
  }

}
