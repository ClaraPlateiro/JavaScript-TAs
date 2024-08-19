//1- Manipulación de cadenas
function repeatString(){
    const textoIngresado = document.getElementById("texto").value;
    const repeticiones = parseInt(document.getElementById("repeticiones").value);
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    for (let i=0; i<repeticiones; i++){
        const p = document.createElement("p");
        p.textContent = textoIngresado;
        resultado.appendChild(p);

    }
}

function reverseString(){

    const textoIngresado = document.getElementById("texto1").value;
    const resultado = document.getElementById("resultado1");

    resultado.innerHTML = "";

    const p = document.createElement('p');
    for (let i=textoIngresado.length-1; i>=0; i--) {
        p.textContent += textoIngresado[i];
    }
    resultado.appendChild(p);
}

//2- Procesamiento de Arreglos
function removeFromArray(){
    let arreglo = document.getElementById("array").value.split(','); // Convertir a arreglo
    const item = document.getElementById("item").value.trim(); // Obtener el item como string
    const resultado = document.getElementById("resultado2");

    resultado.innerHTML = "";

    // Recorrer el arreglo y aplicar trim() a cada elemento
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i] = arreglo[i].trim();
    }

    arreglo = arreglo.filter(element => element !== item);
    console.log(arreglo);
    resultado.textContent = `Arreglo resultante: ${arreglo.join(', ')}`;
}

function getTheTitles(){
    let arreglo = document.getElementById("libros").value.split(',');
    const resultado = document.getElementById("resultado3");
    let titulos = [];
    let n = 0; 

    resultado.innerHTML = "";

    for (let i = 0; i < arreglo.length; i += 2) {
        titulos[n] = arreglo[i].trim();
        n++;
    }

    for (let x = 0; x < titulos.length; x++) {
        const h1 = document.createElement('h1');
        h1.textContent = titulos[x];
        resultado.appendChild(h1);
    }
}

// 3- Filtrado y Transformación
function getOdds(){
    const arreglo = document.getElementById("array1").value.split(',');
    const resultado = document.getElementById("resultado4");
    let impares =[];
    let n = 0;

    resultado.innerHTML = "";

    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i] = parseFloat(arreglo[i]); // Convertir a número
    }

    for(let y=0; y<arreglo.length; y++){
        if(arreglo[y]%2 != 0){
            impares[n] = arreglo[y];
            n++;
        }
    }

    for (let x = 0; x < impares.length; x++) {
        const p = document.createElement('p');
        p.textContent = impares[x];
        resultado.appendChild(p);
    }
}

function duplicates(){
    const arreglo = document.getElementById("elementos").value.split(',');
    const resultado = document.getElementById("resultado5");
    let counts = {};
    let repetidos = [];
    let array = [];

    resultado.innerHTML = "";

    for (let i = 0; i < arreglo.length; i++) {
        array.push(arreglo[i].trim());
    }

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (counts[item]) {
            counts[item] += 1;
        } else {
            counts[item] = 1;
        }
    }

    for (const item in counts) {
        if (counts[item] > 1) {
            repetidos.push({ item: item, count: counts[item] });
        }
    }

    for (let i = 0; i < repetidos.length; i++) {
        const element = repetidos[i];
        
        const h4 = document.createElement('h4');
        h4.textContent = element.item;
        
        const p = document.createElement('p');
        p.textContent = `Cantidad: ${element.count}`;

        resultado.appendChild(h4);
        resultado.appendChild(p);
    }
}

// 1- Suma de rangos
function sumaAll(){
    const num1 = Number(document.getElementById("numero1").value);
    const num2 = Number(document.getElementById("numero2").value);
    const resultado1 = document.getElementById("resultado6");

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
    const resultado1 = document.getElementById("resultado7");

    resultado1.innerHTML = "";

    const fahrenheit = (celsius*(9/5)+32);

    const p = document.createElement('p');
    p.textContent= `${celsius} grados Celsius = ${fahrenheit} grados Fahrenheit`;
    resultado1.appendChild(p);
}

function convertToFahrenheit(){
    const fahrenheit = Number(document.getElementById("fahrenheit").value);
    const resultado2 = document.getElementById("resultado8");

    resultado2.innerHTML = "";

    const celsius = ((fahrenheit-32)*(5/9));

    const p = document.createElement('p');
    p.textContent= `${fahrenheit} grados Fahrenheit = ${celsius} grados Celsius`;
    resultado2.appendChild(p);
}

// 3- Determinación de Año Bisiesto

function leapYears(){
    const año = Number(document.getElementById("año").value);
    const resultado1 = document.getElementById("resultado9");

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
    const array = document.getElementById("array2").value.split(",");
    const resultado = document.getElementById("resultado10");

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

// 1- Generación de Contraseñas
function generatePassword() {
    const largo = Number(document.getElementById("largo").value);
    const resultado = document.getElementById("resultado11");

    resultado.innerHTML = "";

    const p = document.createElement('p');

    if (largo < 8) {
        p.textContent = "La contraseña debe tener al menos 8 caracteres.";
        resultado.appendChild(p);
        return;
    }

    const mayusculas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    const minusculas = 'abcdefghijklmnñopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+~`|}{:;?><,./-=[]';

    const caracteres = mayusculas + minusculas + numeros + simbolos;
    let password = '';

    for (let i = 0; i < largo; i++) {
        const indiceRandom = Math.floor(Math.random() * caracteres.length);
        password += caracteres[indiceRandom];
    }

    let tieneMayuscula = false;
    let tieneMinuscula = false;
    let tieneNumero = false;
    let tieneSimbolo = false;

    for (let i = 0; i < password.length; i++) {
        if (mayusculas.includes(password[i])) {
            tieneMayuscula = true;
        } else if (minusculas.includes(password[i])) {
            tieneMinuscula = true;
        } else if (numeros.includes(password[i])) {
            tieneNumero = true;
        } else if (simbolos.includes(password[i])) {
            tieneSimbolo = true;
        }
    }

    if (!tieneMayuscula || !tieneMinuscula || !tieneNumero || !tieneSimbolo) {
        return generatePassword(length);
    }

    p.textContent = `Su contraseña es: ${password}`;
    resultado.appendChild(p);
}

// 2- Búsqueda del Más Viejo
function findTheOldest() {
    const array = document.getElementById("array3").value.split(",");
    const resultado = document.getElementById("resultado12");

    resultado.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].trim();
    }

    let masViejo = [array[0], Number(array[1])];

    for (let i = 2; i < array.length; i += 2) {
        if (masViejo[1] < Number(array[i + 1])) {
            masViejo[0] = array[i];
            masViejo[1] = Number(array[i + 1]);
        }
    }

    const p = document.createElement('p');
    p.textContent = `La persona más vieja es ${masViejo[0]} con ${masViejo[1]} años.`;
    resultado.appendChild(p);
}

