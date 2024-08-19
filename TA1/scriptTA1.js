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
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    // Recorrer el arreglo y aplicar trim() a cada elemento
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i] = arreglo[i].trim();
    }

    arreglo = arreglo.filter(element => element !== item);
    console.log(arreglo);
    resultado.textContent = `Arreglo resultante: ${arreglo.join(', ')}`;
}

function getTheTitles() {
    let libros = document.getElementById('libro').value;
    let resultado = document.getElementById('resultado3');
    
    let libroFormateado = JSON.parse(libros);
    const h1 = document.createElement('h1');
    h1.textContent=libroFormateado.map(libro => libro.titulo);
    resultado.appendChild(h1);
}

// 3- Filtrado y Transformación
function getOdds(){
    const arreglo = document.getElementById("array").value.split(',');
    const resultado = document.getElementById("resultado");
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
    const resultado = document.getElementById("resultado1");
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
