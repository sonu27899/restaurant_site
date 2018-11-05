export class cusine_dish{
  constructor(
    public cusine_id:number,
    public cusine_name:string,
     public dish_id:number,
      public dish_name:string,
      public dish_price:number,
      public dish_img:string,
      public fk_cusine_id:number


  ){

  }
}
