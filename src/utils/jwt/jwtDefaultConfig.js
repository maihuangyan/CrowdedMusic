// ** Auth Endpoints
export const jwtDefaultConfig = {
  loginEndpoint: `${process.env.REACT_APP_BASE_API_URL}/user/login`,

  forgotPasswordEndpoint: `${process.env.REACT_APP_BASE_API_URL}/user/forgot_password`,

  resetPasswordEndpoint: `${process.env.REACT_APP_BASE_API_URL}/user/update_password`,

  signUpEndpoint: `${process.env.REACT_APP_BASE_API_URL}/user/sign_up`,

  // loadConfigurationsInfoEndpoint: `${process.env.REACT_APP_BASE_API_URL}/configuration`,

  searchAllEndpoint: `${process.env.REACT_APP_BASE_API_URL}/song/search_all`,

  userPlayListEndpoint: `${process.env.REACT_APP_BASE_API_URL}/song/user_playlists`,
  
  createPlayListEndpoint: `${process.env.REACT_APP_BASE_API_URL}/song/create_playlist`,

  getTrendingEndpoint: `${process.env.REACT_APP_BASE_API_URL}/song/trending_all`,

  getCovers_and_reviewsEndpoint: `${process.env.REACT_APP_BASE_API_URL}/cover/covers_and_reviews`,

  songPlayEndpoint: `${process.env.REACT_APP_BASE_API_URL}/song/song_play`,

  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: "Bearer",

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: "accessToken",
  storageUserIDKeyName: "user_id",
  storageUserDataKeyName: "userData",
  storageRefreshTokenKeyName: "refreshToken",
};
