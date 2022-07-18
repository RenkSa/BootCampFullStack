const initialState = {
  name: "Visitante",
  contador: 0
};

const UsuarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload.name };
    case "INCREMENT_CONTADOR":
      return { ...state, contador: state.contador + 1 };

    default:
      return state;
  }
};

export default UsuarioReducer;
