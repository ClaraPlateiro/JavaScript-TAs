// 1- Suma de rangos

function sumaAll(){
    const num1 = Number(document.getElementById("numero1").value);
    const num2 = Number(document.getElementById("numero2").value);
    const resultado1 = document.getElementById("resultado1");

    resultado1.innerHTML = "";

    let suma = 0;
    let tempNum1 = num1;

    if (num1 > num2) {
        resultado1.innerHTML = "<p>El primer número debe ser menor o igual al segundo número.</p>";
        return;
    }

    while (tempNum1 <= num2) {
        suma += tempNum1;
        tempNum1++;
    }

    const p = document.createElement('p');
    p.textContent= `Suma total entre ${num1} y ${num2}= ${suma}`;
    resultado1.appendChild(p);
}

// 2- Conversión de Temperatura
function convertToCelsius(){
    const celsius = Number(document.getElementById("celsius").value);
    const resultado1 = document.getElementById("resultado1");

    resultado1.innerHTML = "";

    const fahrenheit = (celsius*(9/5)+32);

    const p = document.createElement('p');
    p.textContent= `${celsius} grados Celsius = ${fahrenheit} grados Fahrenheit`;
    resultado1.appendChild(p);
}

function convertToFahrenheit(){
    const fahrenheit = Number(document.getElementById("fahrenheit").value);
    const resultado2 = document.getElementById("resultado2");

    resultado2.innerHTML = "";

    const celsius = ((fahrenheit-32)*(5/9));

    const p = document.createElement('p');
    p.textContent= `${fahrenheit} grados Fahrenheit = ${celsius} grados Celsius`;
    resultado2.appendChild(p);
}

// 3- Determinación de Año Bisiesto

function leapYears(){
    const año = Number(document.getElementById("año").value);
    const resultado1 = document.getElementById("resultado1");

    resultado1.innerHTML = "";

    let esBisiesto = false;

    if((año%400) === 0){
        esBisiesto=true;
    }else if((año%4)===0 && (año%100)!== 0){
        esBisiesto=true;
    }

    const p = document.createElement('p');
    p.textContent= `¿${año} es un año bisiesto? ${esBisiesto}`;
    resultado1.appendChild(p);
}

// 4- Suma de Elementos de un Arreglo

function getSum(){
    const array = document.getElementById("array").value.split(",");
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    let sum = 0;

    for(let i = 0; i < array.length; i++){
        sum += Number(array[i]);
    }

    console.log(sum);

    const p = document.createElement('p');
    p.textContent = `Suma de todos los números del arreglo = ${sum}`;
    resultado.appendChild(p);
}