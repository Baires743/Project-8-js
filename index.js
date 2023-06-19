let num = parseInt(prompt("Ingrese un numero del 1 al 10:"));
let alAzar = Math.floor(Math.random() * 10);
let user = prompt("Cual es el numero al azar? " + num);

while(alAzar !== user && num <= 10){
    if(user < alAzar){
        alert("El numero es mayor");
    } else {
        alert("El numero es menor");
    }

    user = prompt("Cual es el numero al azar? " + num);

}
 alert("Felicitaciones adivinaste el numero!");