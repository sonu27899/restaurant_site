var db=require('../dbconnection');
var newuser={
addUser:function(item,callback){
    return db.query("insert into user_tbl values(?,?,?,?,?,?)",[item.user_email,item.user_password,item.Mobile,item.City,item.Gender,item.Address],callback); 
    },
getInfo(callback){
    return db.query("select * from user_tbl",callback);
}
}
module.exports=newuser;