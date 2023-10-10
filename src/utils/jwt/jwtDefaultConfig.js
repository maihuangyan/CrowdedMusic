// ** Auth Endpoints
export const jwtDefaultConfig = {
  loginEndpoint: '/auth/login',

  // loadConfigurationsInfoEndpoint: `${process.env.REACT_APP_BASE_API_URL}/configuration`,


  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: "Bearer",

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: "accessToken",
  storageUserIDKeyName: "user_id",
  storageUserDataKeyName: "userData",
  storageRefreshTokenKeyName: "refreshToken",
};
