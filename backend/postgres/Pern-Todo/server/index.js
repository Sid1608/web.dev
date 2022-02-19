const express=require('express');
const app=express();
const cors=require('cors');
const pool=require('./db')
//middleware 
app.use(cors());
app.use(express.json());


//ROUTES//
//Create a todo
//get all Todos
//get a todo
//updtate a todo
//delete a todo


app.listen(5000,()=>{
    console.log('server started on port 5000');
})