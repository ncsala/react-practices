const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

//SPREAD OPERATOR
// [...state, new_state] ---> concatenando!
// {...state, contador: 5} ---> Se copia state y se reemplaza propiedad contador por nuevo valor


// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById("valor");

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:

  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  valor.innerText = store.getState().contador;
}

// Ejecutamos la funcion 'renderContador':
renderContador();

// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:
store.subscribe(renderContador);
// Esto de aca abajo es lo mismo q la linea de arriba
// store.subscribe(() => renderContador());

// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:
document.getElementById('incremento').onclick = () => store.dispatch(incremento());
document.getElementById('decremento').onclick = () => store.dispatch(decremento());
