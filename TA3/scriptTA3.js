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
    let personas = document.getElementById('personas').value;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    let personasFormateadas = JSON.parse(personas);

    let personaMasVieja = personasFormateadas.reduce((oldest, persona) => {
        return (oldest.edad || 0) > persona.edad ? oldest : persona;
    }, {});

    const p = document.createElement('p');
    p.textContent=`${personaMasVieja.nombre} es la más vieja con ${personaMasVieja.edad} años`;
    resultado.appendChild(p);
}