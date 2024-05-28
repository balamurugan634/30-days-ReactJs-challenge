const cors=require('cors')
const express = require('express')
const app=express()
const mysql=require('mysql')
app.use(cors())
app.use(express.json())
const db=mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'',
    database:'employee'
})
app.post('/create',(req,res)=>{
    const name=req.body.name;
    const age=req.body.age;
    const gender=req.body.gender;
    const dept=req.body.dept;
    const married=req.body.married;
    db.query('insert into employee.users (name,age,gender,married,dept) values(?,?,?,?,?)',[name,age,gender,married,dept],(err,result)=>{
        if(err){
            console.log(err.response.data)
        }
        else{
            res.send('value inserted')
        }
    })
})
app.get('/employees',(req,res)=>{
    db.query('select * from employee.users',(err,result)=>{
        if(err){
            console.log(err.response.data)
        }
        else{
            res.send(result)
        }
    }
)})
app.listen(3000,()=>{
    console.log('backend')
})