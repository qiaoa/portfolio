import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import "./App.css";

const StyledButton = styled(Button)(({ theme }) => ({
  textAlign: "center",
  textTransform: "lowercase",
  fontFamily: '"Montserrat", sans-serif',
  borderWidth: 2,
  width: "120px",
  "&:hover": {
    borderWidth: 2,
  },
}));

const PortfolioButton = styled(Button)(({ theme }) => ({
  textAlign: "center",
  textTransform: "lowercase",
  fontFamily: '"Montserrat", sans-serif',
  borderWidth: 2,
  width: "240px",
  "&:hover": {
    borderWidth: 2,
  },
}));

export { StyledButton, PortfolioButton };
