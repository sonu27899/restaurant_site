var mysql=require('mysql');
var connection=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'project3'
});
module.exports=connection;