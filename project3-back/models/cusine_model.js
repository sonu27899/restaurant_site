var db=require('../dbconnection');
var cusine={
    getCusines:function(callback)
    {
        return db.query("select * from cusines_tbl",callback);
    },
    getCusinesByName(cusine_name,callback)
    {
        return db.query("select c.*,d.* from cusines_tbl c,dish_tbl d where d.fk_cusine_id=c.cusine_id and c.cusine_name=?",[cusine_name],callback);
    }

}

module.exports=cusine;