const textArea = document.getElementById("inputParrafo");
const resultado = document.getElementById("resultado");
const botonpar = document.getElementById("botonPar");
const botonimpar = document.getElementById("botonImpar");

textArea.value = "";

function cargando() {
    resultado.innerHTML = "<p>Cargando...</p>"; 
}

function actualizarResultado(tipo) {
    setTimeout(() => {
        resultado.innerHTML = "";
        const palabras = textArea.value.split("");

        palabras.forEach(palabra => {
            const numero = parseInt(palabra);
        
            if (!isNaN(numero)) {
                const span = document.createElement('span');
                span.textContent = palabra;
            
                if (tipo === 'par' && numero % 2 === 0) {
                    span.style.fontSize = "2em";
                } else if (tipo === 'impar' && numero % 2 !== 0) {
                    span.style.fontSize = "2em";
                } else {
                    span.style.fontSize = "1em";
                }
                resultado.appendChild(span);
            }
        });
    }, 3000);
}

botonpar.addEventListener("click", function() {
    cargando();
    actualizarResultado('par');
});

botonimpar.addEventListener("click", function() {
    cargando();
    actualizarResultado('impar');
});