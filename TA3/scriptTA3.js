// 1- Generación de Contraseñas
function generatePassword() {
    const largo = Number(document.getElementById("largo").value);
    const resultado = document.getElementById("resultado");

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
    const array = document.getElementById("array").value.split(",");
    const resultado = document.getElementById("resultado");

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