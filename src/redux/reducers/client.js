import { ADD_CLIENT } from "../actions";
const initialState = {
  clients: [],
};

function addClient(state, action) {
  return {
    ...state,
    clients: [...state.clients, ...action.payload],
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CLIENT:
      return addClient(state, action);

    default:
      return state;
  }
}
