const pg=require("pg");

const db=new pg.Client({
user:"denizcan",
host:"localhost",
database:"worldHappiness",
password:"Denizcan.7",
port:5432
});

db.connect();

module.exports=db;