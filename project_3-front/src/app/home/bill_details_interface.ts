import { bill_details } from './bii_details_class';
export class bill_details_interface
{
  constructor(
   public  amount:number,
   public user_email:string,
   public arr:bill_details[]
  ){}


}
