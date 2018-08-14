var db=require('../dbconnection');
var bill={
    addBill(item,callback)
    {
        var today=new Date();
        return db.query("INSERT into bill(amount,user_id,date) VALUES(?,?,?)",[item.amount,item.user_id,today],callback);
    },
    getBill(callback)
    {
        return db.query("select * from bill",callback);
    }
}
module.exports=bill;