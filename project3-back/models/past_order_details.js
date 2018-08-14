var db=require('../dbconnection');
var order={
    getPastOrderDetails(id,callback){
        return db.query("select bd.*,d.* from bill_details bd,dish_tbl d where bd.fk_dish_id=d.dish_id And bd.fk_bill_id=?",[id],callback);
    },
    gePastOrder(id,callback)
    {
        return db.query("select * from bill where user_id=?",[id],callback);
    }
}
module.exports=order;