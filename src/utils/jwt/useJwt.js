// ** JWT Service Import
import JwtService from "./jwtService";

// ** Export Service as useJwt
const getJwt = (jwtOverrideConfig) => {
  const _jwt = new JwtService(jwtOverrideConfig);
  return _jwt;
};
const jwt = getJwt({});
export default jwt;
