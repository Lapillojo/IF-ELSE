//Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.
let bellisimo = prompt("¿Eres bellisimo?");
if (bellisimo == "sí"){
    console.log("Ciertamente")
}else{
    console.log("No te creo")
}
//Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm
let numero = parseInt(prompt("Escribe un número, por favor"));
if (numero % 2 == 0){
    console.log( numero + " es divisible entre 2")
}else{
    console.log(numero + " no es divisible entre 2")
} 
//Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.
let numero = parseInt(prompt("Introduce un número, por favor"));
if (numero % 2 == 0){
    alert( numero + " es un número par")
}else{
    alert(numero + " no es un número par")
} 
//Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.
let numero = parseInt(prompt("¿Cuál es tu número de cliente?"));
if (numero == 1000 ){
    console.log ("Ganaste un premio.")
} else {
    console.log (" Lo sentimos, sigue participando.")
}
//Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.
let x = 10; 
let y = 20;
if (x < y ){
    console.log ( x + " es menor que " + y)
} else{
    console.log (y + " es el número mayor ")
}
//Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.
let x = 30;
let y = 40;
let z = 20;
if (x > y && x > z ){
    console.log ( x + " es el número mayor ")
} else if (y > x && y > z){
    console.log (y + " es el número mayor ")
}else if (x > y && x > z){
    console.log (y + " es el número mayor ")
}
//Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

let dia = prompt("Ingresa un día de la semana").toLowerCase();
if(dia == "lunes"){
    console.log ("No me gustan los lunes")
} else if (dia == "martes"){
    console.log ("Hoy es martes de tragadera")
}else if (dia == "miércoles"){
    console.log ("Hoy lograremos nuestras metas")
}else if (dia == "jueves"){
    console.log ("Tiempo de chelas")
}else if (dia == "viernes"){
    console.log ("Netflix!")
}else if (dia == "sábado"){
    console.log ("Quiero solo dormir")
}else if (dia == "domingo"){
    console.log ("Que empiece la semana")
}else{
    console.log ("No es un día de la semana.")
}

//Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.
let calificacion = parseInt(prompt("¿Cuánto obtuviste de calificación?"));
if (calificacion < 1  || calificacion > 10){
    console.log ("ERROR")
} else if (calificacion < 6  && calificacion > 0){
    console.log ("REPROBADO")
} else if (calificacion < 9  && calificacion > 5){
    console.log ("REGULAR")
} else if (calificacion == 9){
    console.log ("BIEN")
} else if (calificacion == 10){
    console.log ("EXCELENTE")
} 

/* Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
1)El helado sin topping cuesta 50 MXN.
2)El topping de oreo cuesta 10 MXN.
3)El topping de KitKat cuesta 15 MXN.
4)El topping de brownie cuesta 20 MXN.
5)En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.

*/
/*let topping = confirm("¿Deseas tu helado con toppings?");
let sabor = prompt("¿Qué sabor de topping deseas?").toLocaleLowerCase();
if
 */

/*

Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses

*/

/*

Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5. 
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué: 
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.

/*




