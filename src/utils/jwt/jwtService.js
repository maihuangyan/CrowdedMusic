import axios from "axios";
import { jwtDefaultConfig } from "./jwtDefaultConfig";
import { messageService } from "./messageService";
import { store } from "store";
import OneSignal from 'react-onesignal';

const headers = {
  headers: {
    "x-api-key": "juhtqcd8rZTw7hmya7dhTDsWiyBWy96V7WjVX5QVrfncQ2XJM8LArnYcyW2z",
    "x-api-secret": "asdf",
    "device_id": "device_id",
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
        const accessToken = this.getToken();

        // ** If token is present add it to request's Authorization Header
        if (OneSignal.User && OneSignal.User.PushSubscription) {
          headers.headers.device_id = OneSignal.User.PushSubscription.device_id ? OneSignal.User.PushSubscription.device_id : 'browser';
        }
        if (accessToken) {
          // ** eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // ** Add request/response interceptor
    axios.interceptors.response.use(
      (response) => {
        if (
          response.data.ResponseCode == 1000002 ||
          response.data.ResponseCode == 1000003 ||
          response.data.ResponseCode == 1000004
        ) {
          console.log('logout: 42')
          messageService.sendMessage("Logout");
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
            messageService.sendMessage("Logout");
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
}
