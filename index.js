import db from "mongoose";
import express from "express";

const app = express();
app.use(express.json())
const port=3000; 

app.get("/", (req, res)=> {

    res.send("hola mundo")
});

app.post('/holi',(req, res)=>{
    console.log(req.body)
    const {nombre}=req.body
    res.send(`hola ${nombre}`)
});

app.post('/test',(req, res)=>{
    console.log(req.body)
    const {nombre, apellido, mail }=req.body
    res.send(`Hola ${nombre} ${apellido} ! 
        Tu mail es: ${mail} `)
})

app.listen(port,()=>{
    console.log(`el servidor arrando en la url http://localhost:&{port}`)


})