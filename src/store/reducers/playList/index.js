import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage";

import { SET_PLAYLIST, CLEAR_PLAYLIST, GET_PLAYLIST, OPEN_PLAYLIST } from "../../actionType"

const initState = {
    playList: [],
    myPlaylist: [],
    openPlaylist: false,
}

const persistConfig = {
    key: "playList",
    storage,
    whitelist: ["playList",], // place to select which state you want to persist
};

const playListReducer = (state = initState, action) => {
    const { type, data = 1 } = action
    switch (type) {
        case GET_PLAYLIST:
            return { ...state, myPlaylist: data }
        case SET_PLAYLIST:
            let playList = [...state.playList]
            if (playList.length == 0) {
                if (Object.prototype.toString.call(data) === '[object Array]') {
                    return { ...state, playList: data }
                } else {
                    return { ...state, playList: [...state.playList, data] }
                }
            } else {
                if (Object.prototype.toString.call(data) === '[object Array]') {
                    return { ...state, playList: data }
                } else {
                    if (playList.filter((item) => item.id == data.id).length) {
                        playList = playList.filter((item) => item.id != data.id)
                        playList.unshift(data)
                    } else {
                        playList.unshift(data)
                    }
                    return { ...state, playList: playList }
                }

            }
        case CLEAR_PLAYLIST:
            return { ...state, playList: [] }

        case OPEN_PLAYLIST:
            return { ...state, openPlaylist: data }
        default:
            return state
    }
}

export default persistReducer(persistConfig, playListReducer)