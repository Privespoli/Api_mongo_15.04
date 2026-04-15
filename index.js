import db from "mongoose";
import express from "express";
import {palindromo, saludar, datoaleatorio, ordenararreglo, calculartamano} from "./texto.js";
import {sumar, restar, multiplicar, dividir, compararnumeros, calcularmodulo, fizzbuzz} from "./math.js";
import {pokeapifun} from "./pokeapi.js"


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

app.post("/sumar", (req,res)=>{
    const {num1, num2}= req.body;
    const suma= sumar(num1, num2);
    res.status(200).json({resultado: suma});

} )

app.post("/restar", (req,res)=>{
    const {num1, num2}= req.body;
    const resta= restar(num1, num2);
    res.status(200).json({resultado: resta});

} )

app.post("/multiplicar", (req,res)=>{
    const {num1, num2}= req.body;
    const multiplica= multiplicar(num1, num2);
    res.status(200).json({resultado: multiplica});

} )

app.post("/dividir", (req,res)=>{
    const {num1, num2}= req.body;
    const division= dividir(num1, num2);
    res.status(200).json({resultado: division});

} )

app.post("/comparar", (req,res)=>{
    const {num1, num2, num3}= req.body;
    const resultado = compararnumeros(num1, num2, num3);
    res.status(200).json({resultado: resultado});

} )

app.post("/modulo", (req, res) => {
      const { num1, num2 } = req.body;
     const resultado = calcularmodulo(num1, num2);
       res.status(200).json({ 
        operacion: "módulo (resto de la división)",
        dividendo: num1,
        divisor: num2,
        resultado: resultado 
    });
});

app.post("/fizzbuzz", (req, res) => {
    const { inicio, fin } = req.body;
    const resultado = fizzbuzz(inicio, fin);
    res.status(200).json({ 
        rango: `${inicio} a ${fin}`,
        secuencia: resultado 
    });
});

app.post("/pokeapi", (req, res) => {
    const { numero } = req.body;
    const spriteUrl = pokeapifun(numero);
    if (!spriteUrl) {
        return res.status(400).json({ 
            error: "El número debe estar entre 1 y 1025" 
        });
    }
    res.status(200).json({ 
        numero: numero,
        sprite: spriteUrl 
    });
});


app.listen(port,()=>{
    console.log(`el servidor arrando en la url http://localhost:&{port}`)


})