const express =require ("express");
const bodyParser = require('body-parser')
const cors =require ('cors');

//database
const db=require("./db");

const app=express();
const port=5000;

app.use(bodyParser.urlencoded({ extended: true })); //body-parser middleware for urlencoded
app.use(bodyParser.json());//body-parser for json format
app.use(cors());//middleware for connection between client-server


app.get("/countries",async(req,res)=>{
    
    try {

        let {sortBy,orderBy}=req.query;

         // Default values if not provided by the user
         sortBy = sortBy || "overallrank";
         orderBy = orderBy || "ASC";

         const query = `SELECT overallrank, country, score, gdppercapita, generosity FROM happinessranks ORDER BY ${sortBy} ${orderBy}`;

        const allData=await db.query(query);
        res.json(allData.rows);
    } catch (err) {
        console.error(err.message);
    }


}); 

app.get("/countries/:country",async (req,res)=>{
    try {
        let {country}=req.params;
        country = country.charAt(0).toUpperCase() + country.slice(1);
console.log(country)
        const data=await db.query(`SELECT overallrank,country,score,gdppercapita,generosity FROM happinessranks WHERE country = $1`,[country])
        res.json(data.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})










app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);

  
})
