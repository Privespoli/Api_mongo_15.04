# Api_mongo_15.04
crear una api para cada operación, deben además seccionar las operaciones por ficheros, es decir 1 fichero para las funciones matemáticas, 1 fichero para las operaciones con texto y un fichero para las operaciones con apis externas (pokeapi)
la api por metodo post debe solicitar la información necesaria para que cada api funcione de manera dinámica

	IMPORTANTE: investigar cómo manejar los estatus de respuesta http y manipularlos
INVESTIGAR: cómo responder usando json en lugar de send (si, pueden usar una variable para responder en lugar de un mensaje de texto, esto quiere decir que también pueden responder con un json)


crear 1 api para cada operación:
matematica:
suma
resta
multiplicación
división
indicar el número mayor, el menor y el de en medio
sacar el modulo entre 2 números
hacer el fizzbuzz entre 2 números


texto:
recibir nombre y apellido y responder con “hola ‘nombre’ ‘apellido’ qué tal tu día?” o algo por el estilo

enviar varios datos personales (inventarlos) y que aleatoriamente imprima uno de esos datos en la respuesta (“el dato aleatorio es ‘dato aleatorio’”)

-----testar el dato aleatorio en postman:
{
    
  "ciudad": "Barcelona",
  "clima": "Soleado",
  "habitantes": "1.6M"

 


}

solicitar un arreglo con los datos que ustedes deseen y responder con el arreglo ordenado de manera ascendente o descendente
-----testar en postman:
{
    "lista": [10, 5, 8, 1, 20],
    "orden": "des"
}


introducir una cadena de caracteres (palabra/frase) e indicar el tamaño del mismo

pokeapi:


enviar 1 número entre 1 y 1025 y que la api responda con la url de un sprite del pokemon del mismo número

