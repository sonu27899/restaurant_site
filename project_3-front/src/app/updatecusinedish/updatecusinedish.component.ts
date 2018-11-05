import { Component, OnInit } from "@angular/core";
import { AdminService } from "../admin.service";
import { Router } from "../../../node_modules/@angular/router";
import { cusine } from "../home/cusine_class";
import { CusineService } from "../cusine.service";
import {MatTableDataSource,MatPaginator} from "../../../node_modules/@angular/material";
import { cusine_dish } from "../home/cusine_dish_class";
import { dish } from "../home/dish_class";

@Component({
  selector: "app-updatecusinedish",
  templateUrl: "./updatecusinedish.component.html",
  styleUrls: ["./updatecusinedish.component.css"]
})
export class UpdatecusinedishComponent implements OnInit {
  dish_name:string;
  dish_price:number;
  i:number;
  f:number=0;
  f1:number=0;
  arr:cusine[]=[];
  fk_cusine_id:number;
  cusine_name: string;
  cusine_arr: cusine[] = [];
  cusine_dish_arr: cusine_dish[] = [];
  displayedColumns: string[] = ['Action','Cusine_Name'];
  displayedColumns1:string[]=['Action','dish_name','dish_price','cusine_name'];
  datasource1=new MatTableDataSource();
  selectedfile:File=null;
  datasource = new MatTableDataSource();
  delArr:cusine[]=[];
  delArr1:cusine_dish[]=[];
  constructor(private _ser: AdminService,public _cusineser: CusineService,public _router: Router) {}
  onaddcusine(cusine_name) {
    this._ser.addcusine(cusine_name).subscribe(
      (data: any[]) => {
      console.log(data);
      this.cusine_arr.push(new cusine(this.cusine_name));
      this.datasource.data = this.cusine_arr;
    });

  }
  dish_arr:dish[]=[];
  onselect(value)
{
  this.selectedfile=<File>value.target.files[0];
}
checkchange(item:cusine){
  if(this.delArr.find(x => x==item)){
    this.delArr.splice(this.delArr.indexOf(item),1);
  }
  else{
    this.delArr.push(item);
  }
}
checkchange1(item:cusine_dish){
  if(this.delArr1.find(x => x==item)){
    this.delArr1.splice(this.delArr1.indexOf(item),1);
  }
  else{
    this.delArr1.push(item);
  }
}
onAlldelete1()
{
  this._cusineser.deleteAlldish(this.delArr1).subscribe(
    (x:any)=>{
    for(this.i=0;this.i<this.delArr1.length;this.i++){
      if(this.arr.find(x => x == this.delArr1[this.i])){
        this.arr.splice(this.arr.indexOf(this.delArr1[this.i]),1);

      }
    }
    console.log(this.arr);
    this.datasource1.data=this.arr;
  });

}
onAlldelete()
{
  this._ser.deleteAllcusine(this.delArr).subscribe(
    (x:any)=>{
    for(this.i=0;this.i<this.delArr.length;this.i++){
      if(this.arr.find(x => x == this.delArr[this.i])){
        this.arr.splice(this.arr.indexOf(this.delArr[this.i]),1);

      }
    }
    console.log(this.arr);
    this.datasource.data=this.arr;
  });

}

  onadddish()
  {
    var fd=new FormData();
  fd.append('dish_name',this.dish_name.toString());
fd.append('dish_price',this.dish_price.toString());
fd.append('dish_img',this.selectedfile,this.selectedfile.name);
fd.append('fk_cusine_id',this.fk_cusine_id.toString());


    this._cusineser.adddish(fd).subscribe(
      (data:dish[])=>
      {
        console.log(data);
        this.dish_arr.push(new dish(this.dish_name,this.dish_price,this.selectedfile.name,this.fk_cusine_id));
        this.datasource1.data=this.datasource1.data.concat(this.dish_arr);
      }
    )

  }

  ngOnInit() {
    this._cusineser.getCusine().subscribe(
      (data: cusine[]) => {
      console.log(data);
      this.cusine_arr = data;
      this.datasource.data = this.cusine_arr;
    });
    this._cusineser.getdish().subscribe(
      (data: cusine_dish[]) => {
      console.log(data);
      this.cusine_dish_arr = data;
      this.datasource1.data=this.cusine_dish_arr;
    });
  }
}
