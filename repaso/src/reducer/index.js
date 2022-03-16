const initialState = {
  users: [],
}

export default function rootReducer(state = initialState, action){
  switch (action.type) {

    case 'CREATE_USER':
      return {
        ...state,
        users: [...state.users, action.payload]
        // Otra forma de hacer lo mismo que la linea de arriba
        // users: state.users.concat(action.payload) 
      }

    default: return {...state}
  }
}