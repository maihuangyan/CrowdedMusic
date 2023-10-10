import { styled } from "@mui/material/styles";

// ==============================|| Block ||============================== //

const Block = styled("div")(({ theme }) => ({
  background: theme.palette.common.black,
  padding: "20px",
  outline: "solid 1px #202020",
  borderRadius: 0,
  color: theme.palette.text.primary,
  height: "100%",
}));

export default Block;
