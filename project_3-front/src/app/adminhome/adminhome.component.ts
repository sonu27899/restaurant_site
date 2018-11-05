import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatTableDataSource,MatPaginator } from '../../../node_modules/@angular/material';
import { AdminService } from '../admin.service';
import { pendingorder } from './pendingorder_class';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  pendingarr:pendingorder[]=[];
  displayedColumns: string[] = ['Amount','Date','User_Name','Status','Action'];
  dataSource=new MatTableDataSource();

  constructor(private _ser:AdminService,public _router:Router) { }
  onUpdate(bill_no:number) {
    this._ser.updateOrder(bill_no).subscribe(
      (data:any[])=>
      {
        console.log(data);
        this.pendingarr.splice(this.pendingarr.indexOf(this.pendingarr[bill_no]),1);
        this.dataSource.data=this.pendingarr;
      }
    );
}


  ngOnInit() {
    this._ser.getAllOrder().subscribe(
      (data:any[])=>
      {
         console.log(data);
        this.pendingarr=data;
        this.dataSource.data=this.pendingarr;
      }
    );
  }

}
