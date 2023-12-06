import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage";

import { SET_USER, CLEAR_USER } from "../../actionType"

const initState = {
    user: {
        token: ""
    }
}

const persistConfig = {
    key: "user",
    storage,
    whitelist: ["user",], // place to select which state you want to persist
};

const userReducer = (state = initState, action) => {
    const { type, payload = 1 } = action
    switch (type) {
        case SET_USER:
            return { ...state, user: payload }
        case CLEAR_USER:
            return { ...state, user: { token: "" } }
        default:
            return state
    }
}

export default persistReducer(persistConfig, userReducer)