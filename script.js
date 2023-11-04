
let inputsPrecios = document.querySelectorAll('.precio-seguro');

inputsPrecios.forEach(function(input) {
    input.addEventListener('click', function() {
        let parienteP = this.elementoPariente;
        parienteP.style.display = 'none';
    });
});

