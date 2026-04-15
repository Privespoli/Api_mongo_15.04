import db from "mongoose";
import express from "express";
import {palindromo, saludar, datoaleatorio, ordenararreglo, calculartamano} from "./texto.js";



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

app.post('/palindromo',(req, res)=>{

    const {palabra}=req.body

    const resultado=palindromo(palabra)
    // palindromo()
    res.status(200).json({palindromo: resultado })    
})

app.post("/saludar", (req, res)=>{
    const{nombre, apellido}=req.body;
    const resultado = saludar(nombre, apellido);
    res.status(200).json({ saludo: resultado });
})

app.post("/datoaleatorio", (req, res)=>{
    const datos =req.body;
    const datoElegido = datoaleatorio(datos);
    res.status(200).json({ respuesta: `El dato aleatorio es: ${datoElegido}`});
    
})

app.post("/ordenararreglo", (req, res)=>{
    const {lista, orden} =req.body
    const arregloordenado = ordenararreglo(lista, orden);
    res.status(200).json({ resultado: arregloordenado});

})

app.post("/tamano", (req,res)=>{
    const {texto} = req.body;
    const tamano = calculartamano(texto)
    res.status(200).json({frase: texto,
        cantidad_caracteres: tamano});

})




app.listen(port,()=>{
    console.log(`el servidor arrando en la url http://localhost:&{port}`)


})