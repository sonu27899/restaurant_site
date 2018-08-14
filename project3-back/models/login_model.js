var db=require('../dbconnection');
var login={
    getLoginById(user_email,item,callback){
        return db.query("select * from user_tbl where user_email=? And user_password=?",[user_email,item.user_password],callback);
    },
}
module.exports=login;