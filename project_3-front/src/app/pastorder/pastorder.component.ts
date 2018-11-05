import { Component, OnInit } from '@angular/core';
import { CusineService } from "../cusine.service";
import { pastorder } from "../pastorder/pastorder_class";
import { Router } from "@angular/router";
import { MatTableDataSource,MatPaginator } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-pastorder',
  templateUrl: './pastorder.component.html',
  styleUrls: ['./pastorder.component.css']
})
export class PastorderComponent implements OnInit {
  pastarr:pastorder[]=[];
  displayedColumns: string[] = ['Amount','Date','Action'];
  dataSource=new MatTableDataSource();

  constructor(private _ser:CusineService,public _router:Router) { }

  onclickBack()
  {
    this._router.navigate(['home']);
  }
  onClick(item)
  {
    this._router.navigate(['/pastorderdetails',item.bill_no]);
  }

  ngOnInit() {
    this._ser.getPastOrder(localStorage.getItem('id')).subscribe(
      (data:any[])=>
      {
         console.log(data);
        this.pastarr=data;
        this.dataSource.data=this.pastarr;
      }
    );
  }

}
