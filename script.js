// Obtengo los inputs con la clase ".seguros"
let inputsPrecios = document.querySelectorAll('.seguros');

inputsPrecios.forEach(function(input) {
    input.addEventListener('click', function() {
        let targetId = this.getAttribute('data-target');

        let todosLosPrecios = document.querySelectorAll('.precio-seguro');
        todosLosPrecios.forEach(function(precio) {
            precio.classList.remove('mostrar');
        });

        let precio = document.getElementById(targetId);

        precio.classList.add('mostrar');

    });
});



