import useJwt from "utils/jwt/useJwt";
import { SET_PLAYLIST, CLEAR_PLAYLIST, GET_PLAYLIST } from "../actionType"

// ** get user playList
export const getPlayList = (user_id) => {
  return (dispatch, getState) => {
    useJwt
      .getUserPlayList({user_id})
      .then((res) => {
        if (res.data.status == 1) {
          let data = [];
          // for (let user of res.data.ResponseResult) {
          //   if (user.id != useJwt.getUserID()) {
          //     data.push(user);
          //   }
          // }
          console.log(res.data.data)
          dispatch({
            type: GET_PLAYLIST,
            data,
          });
        } else {
          console.log(res.data.ResponseCode);
        }
      })
      .catch((err) => console.log(err));
  };
};

// ** Add new playList
export const addPlayList = (playList) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_PLAYLIST,
      data: playList,
    });
  };
};

// ** clear playList
export const clearPlayList = () => {
  return async (dispatch) => {
    dispatch({
      type: CLEAR_PLAYLIST,
    });
  };
};

