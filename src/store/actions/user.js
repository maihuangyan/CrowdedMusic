import useJwt from "utils/jwt/useJwt";
import { SET_USER } from "store/actionType";

// ** Get all Data
export const getAllData = () => {
  return async (dispatch) => {
    useJwt
      .getAllUsers()
      .then((res) => {
        if (res.data.ResponseCode == 0) {
          let data = [];
          for (let user of res.data.ResponseResult) {
            if (user.id != useJwt.getUserID()) {
              data.push(user);
            }
          }

          
        } else {
          console.log(res.data.ResponseCode);
        }
      })
      .catch((err) => console.log(err));
  };
};

// ** Get data on page or row change
export const getData = (params) => {
  return async (dispatch) => {
    useJwt
      .searchUsers({ params })
      .then((res) => {
        if (res.data.ResponseCode == 0) {
          let data = [];
          for (let user of res.data.ResponseResult.users) {
            if (user.id != useJwt.getUserID()) {
              data.push(user);
            }
          }

          dispatch({
            type: "GET_DATA",
            data,
            totalPages: res.data.ResponseResult.total,
            params,
          });
        } else {
          console.log(res.data.ResponseCode);
        }
      })
      .catch((err) => console.log(err));
  };
};

// ** Get User
export const getUser = (param) => {
  return async (dispatch) => {
    dispatch({
      type: SET_USER,
      payload: param,
    });
  };
};

// ** Add new user
export const addUser = (user) => {
  return (dispatch, getState) => {
    dispatch({
      type: "ADD_USER",
      data: user,
    });
  };
};

export const updateUser = (user) => {
  return (dispatch, getState) => {
    dispatch({
      type: "UPDATE_USER",
      data: user,
    });
  };
};

// ** Delete user
export const deleteUser = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: "DELETE_USER",
      data: id,
    });
  };
};
