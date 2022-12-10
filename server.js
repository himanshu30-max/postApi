const express=require('express')
const mysql=require('mysql2')
const app=express();
const cors = require("cors");
app.use(cors());
app.use(express.json())
const Port=process.env.Port || 5000
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'ABCD1234',
    port:'3309',
    database:'insaid'
})
con.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('connected')
    }
})

app.post('/',(req,res)=>{
    const{name,number,email,course}=req.body;
    con.query('insert into users values(?,?,?,?)',[name,number,email,course],(err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send('POSTED');
        }
    })

})
app.listen(Port,()=>{
    console.log(`${Port} on`)
})
