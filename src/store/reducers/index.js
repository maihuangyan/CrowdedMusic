// reducer import
import usersReducer from "./users";

// **  Initial State
const initialState = {
  
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      const loginObj = { ...action };
      return { ...state, userData: action.data, ...loginObj };

    case "LOGOUT":
      const logoutObj = { ...action };
      return { ...state, userData: null, ...logoutObj };

    default:
      return state;
  }
};

const reducer = {
  auth: authReducer,
  users: usersReducer,
};

export default reducer;
