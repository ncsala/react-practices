// importamos redux de esta forma ya que no estamos trabajando con react, usamos Nodejs puro
const redux = require("redux");

// creamos el estado con el estado inicial
const initialState = {
  owner: "Nicolas",
  todo: [],
  completed: [],
};

// creamos el reducer. Recordar que es funcion pura
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, todo: [...state.todo, action.text] };
    case "REMOVE":
      return ({
        ...state,
        todo: state.todo.filter((element, i) => {return  i !== action.index;}),
        completed: [...state.completed, state.todo[action.index]],
      });
    default:
      return state;
    }
};

//creamos la store
const store = redux.createStore(reducer);

//creamos los 'action creators'. Tiene q retornar objeto, obligatorio el 'type'
//Aca por ejemplo mandamos texto a agregar con el todo
function addTodo(text) {
  return ({ type: "ADD", text });
}

//aca en otro 'action creator' recibimos el indice de un arreglo para remover
function removeTodo(index) {
  return ({ type: "REMOVE", index });
}

//me subscribo para que quede atento a todo cambio.
//me evito tener q hacer todos los console.log de abajo
store.subscribe(()=> {
  console.log(store.getState())
})

//ahora utilizo el 'dispatch' para acceder al store
// console.log(store.getState());
store.dispatch(addTodo("comprar  pan"));
//get state nos da el estado actual, lo imprimos antes de dispatch y despues
//para ver q recibimos
console.log(store.getState());
store.dispatch(addTodo("comprar tomate"));
store.dispatch(addTodo("comprar lechuga"));
// console.log(store.getState());
store.dispatch(removeTodo(1));
// console.log(store.getState());
