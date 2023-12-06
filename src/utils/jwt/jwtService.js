import axios from "axios";
import { jwtDefaultConfig } from "./jwtDefaultConfig";
import { messageService } from "./messageService";
import { store } from "store";
import OneSignal from 'react-onesignal';

const headers = {
  headers: {
    "x-api-key": "7JdqCYIFZEvuVu4G7liStvRM1bt9uAGIBNlVO2mk6QoSK4wmpK1O2OXwa0Be95ufB6nSh4ADRkrAVCu93u4tB1ohekWQfV2zOSkx",
  }
}

const baseURL = process.env.REACT_APP_BASE_API_URL;

const request = axios.create({
  baseURL: baseURL,
  timeout: 5000,
})

export default class JwtService {
  // ** jwtConfig <= Will be used by this service
  jwtConfig = { ...jwtDefaultConfig };

  // ** For Refreshing Token
  isAlreadyFetchingAccessToken = false;

  // ** For Refreshing Token
  subscribers = [];

  constructor(jwtOverrideConfig) {
    this.jwtConfig = { ...this.jwtConfig, ...jwtOverrideConfig };

    // ** Request Interceptor
    axios.interceptors.request.use(
      (config) => {
        // ** Get token from localStorage
        const accessToken = store.getState().users.user.token;

        // ** If token is present add it to request's Authorization Header
        // if (OneSignal.User && OneSignal.User.PushSubscription) {
        //   headers.headers.device_id = OneSignal.User.PushSubscription.device_id ? OneSignal.User.PushSubscription.device_id : 'browser';
        // }

        if (accessToken) {
          // ** eslint-disable-next-line no-param-reassign
          // config.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
          config.headers.token = accessToken;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // ** Add request/response interceptor
    axios.interceptors.response.use(
      (response) => {
        if (
          response.status == 200 ||
          response.status == 201 ||
          response.status == 202
        ) {
          console.log('logout: 42')
        }
        return response;
      },
      (error) => {
        // ** const { config, response: { status } } = error
        const { config, response } = error;
        const originalRequest = config;
        console.log("error", error);

        // ** if (status === 401) {
        if (response) {
          console.log("response", response);
          if (response.status === 401) {
            console.log('logout: 57')
          }
          else if (response.status === 403) {
            const data = {
              ResponseCode: 1000011,
              ResponseMessage: `You don't have the permisson`,
            };
            return Promise.resolve({ data });
          }
        }
        return Promise.reject(error);
      }
    );
  }


  login(...args) {
    return axios.post(this.jwtConfig.loginEndpoint, ...args, headers);
  }

  forget(...args) {
    return axios.post(this.jwtConfig.forgotPasswordEndpoint, ...args, headers);
  }

  resetPassword(...args) {
    return axios.post(this.jwtConfig.resetPasswordEndpoint, ...args, headers);
  }
  searchAllEndpoint

  signUp(...args) {
    return axios.post(this.jwtConfig.signUpEndpoint, ...args, headers);
  }
  
  searchAll(...args) {
    return axios.get(`${this.jwtConfig.searchAllEndpoint}?search_text=${args[0].search_text}`, headers);
  }

  getUserPlayList(...args) {
    return axios.get(`${this.jwtConfig.userPlayListEndpoint}?user_id=${args[0].user_id}`, headers);
  }

}



