import { styled, Box } from "@mui/material";
import { Constants } from "../../data/constants";
import { StyleConstants } from "../../styles/StyleConstants";
import { keyframes } from "@emotion/react";

// Animation keyframes
const slideInDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const IntroductionContainer = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: 0,
  height: 84,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: StyleConstants.HEADER,
  fontSize: "2em",
  zIndex: 1,
  fontWeight: 600,
  animation: `${slideInDown} 0.5s ease-in-out`,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.45em",
  },
}));

export const Header = () => {
  return (
    <IntroductionContainer>
      Portafolio de {Constants.USERNAME}
    </IntroductionContainer>
  );
};
