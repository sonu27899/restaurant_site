export class bill_details{
  constructor(
      public fk_dish_id:number,
      public qty:number,
      public price:number,
      public remark:string,
      public fk_bill_id:number
  ){

  }
}
