var db=require('../dbconnection');
var bill_details={
    getBillDetails(callback)
    {
        return db.query("select * from bill_details",callback);
    },
    addBillDetails(item,callback)
    {   
       var value=[];
        for(let i=0;i<item.length;i++){
            value[i]=[item[i].fk_dish_id,item[i].qty,item[i].price,item[i].remark,item[i].fk_bill_id];
        }
        console.log(value);
        return db.query("INSERT into bill_details (fk_dish_id,qty,price,remark,fk_bill_id) VALUES ?",[value],callback);        
    },
    
};
module.exports=bill_details;