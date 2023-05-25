import { styled, Box } from "@mui/material";
import MyImage from "../../../assets/joseauyon.jpg";
import Resume from "../../../assets/resume.pdf";
import {
  CustomButton,
  SectionWrapper,
  TitleWrapper,
} from "../../../styles/sectionStyles";
import aboutMeInfo from "../../../data/AboutMe.json";
import { useEffect } from "react";
import { keyframes } from "@emotion/react";

// Animation keyframes
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slideInLeft = keyframes`
  0% {
    transform: translateX(-20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInUp = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const AboutMeContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignSelf: "center",
  animation: `${fadeIn} 1s ease-in-out`,
  "& img": {
    width: 400,
    [theme.breakpoints.down("sm")]: {
      width: 350,
    },
    animation: `${slideInLeft} 1s ease-in-out`,
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const DetailsWrapper = styled(Box)(({ theme }) => ({
  fontSize: 16,
  marginLeft: 15,
  "& .actions": {
    margin: "12px 0",
  },
  [theme.breakpoints.down("md")]: {
    margin: "10px 0 0 0",
  },
  animation: `${slideInUp} 1s ease-in-out`,
}));

export const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionWrapper>
      <TitleWrapper>Acerca de mí</TitleWrapper>
      <AboutMeContainer>
        <img src={MyImage} alt="Profile" />
        <DetailsWrapper>
          <div>{aboutMeInfo.aboutMe}</div>
          <div className="actions">
            {/* Actions */}
          </div>
        </DetailsWrapper>
      </AboutMeContainer>
    </SectionWrapper>
  );
};
