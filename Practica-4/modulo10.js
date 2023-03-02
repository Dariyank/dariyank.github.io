document.addEventListener('DOMContentLoaded', function() {
    function validarCedula(cedula) {
        cedula = cedula.replace(/-/g, '');
        if (cedula.length !== 11) {
          return 'Cédula inválida';
        }

        const digitos = cedula.substring(0, 10);
        console.log(digitos);
        let suma = 0;
        for (let i = 0; i < digitos.length; i++) {
            let num = i+1;
          let digito = parseInt(digitos[i], 10);
          if (num % 2 == 0) {
            digito = digito * 2;
            if (digito > 10) {
              digito -= 9;
            }
          }
          suma += digito;
        }

        const verificadorCalculado = (10 - (suma % 10));
        const verificadorCedula = parseInt(cedula[10], 11);
        console.log(verificadorCalculado, verificadorCedula);
        if (verificadorCalculado === verificadorCedula) {
          return 'Cédula válida';
        } else {
          return 'Cédula inválida';
        }
      }

    const botonValidar = document.getElementById('validar');
    const inputCedula = document.getElementById('cedula');
    const resultado = document.getElementById('resultado');
    const aviso = document.getElementById('aviso');
  
    botonValidar.addEventListener('click', function() {
        const cedula = inputCedula.value;
        const mensaje = validarCedula(cedula);
        if(mensaje == 'Cédula válida'){
            resultado.style.display = 'block';
            resultado.style.color = 'green';
            aviso.style.display = 'none';
        }else{
            resultado.style.color = 'red';
            resultado.style.display = 'block';
            aviso.textContent = 'Verifique la cedula o ingrese otra';
            aviso.style.color = 'red';
            aviso.style.display = 'block';

        }
        resultado.textContent = mensaje;
    });
});
