// material-ui
import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import loader from 'assets/images/back-trans.svg';

// styles
const LoaderWrapper = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1301,
  width: "100%",
});

// ==============================|| LOADER ||============================== //
const Loader = () => (
  <LoaderWrapper>
    {/* <LinearProgress color="primary" /> */}
  </LoaderWrapper>
);

// const Loader = () => (
//   <Box
//     aria-labelledby="spring-modal-title"
//     aria-describedby="spring-modal-description"
//     sx={{
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       width: "100vw",
//       height: "100vh",
//       backgroundColor: "#000"
//     }}
//   >
//     <div style={{ backgroundColor: "transparent", outline: 0 }}>
//       <img src={loader} alt="" style={{ width: '100px', height: '100px' }} />
//     </div>
//   </Box>
// );

export default Loader;
