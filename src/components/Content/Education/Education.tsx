import { Box, styled } from "@mui/material";
import { clsx } from "clsx";
import { StyleConstants } from "../../../styles/StyleConstants";
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

const slideIn = keyframes`
  0% {
    transform: translateX(-20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

interface Education {
  name?: string;
  course?: string;
  location?: string;
  span?: string;
  specialization?: string;
  score?: string;
}

interface Prop {
  education: Education;
  ind: number;
}

const EducationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 20,
  animation: `${fadeIn} 1s ease-in-out`,
  "&.reverse": {
    flexDirection: "row-reverse",
  },
  "& .span": {
    height: 100,
    width: 100,
    border: "1px solid black",
    background: StyleConstants.EDUCATION_BG,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
    borderRadius: "50%",
    animation: `${slideIn} 1s ease-in-out`,
  },
  "& .connector": {
    background: "black",
    height: 1,
    flexGrow: 1,
  },
  "& .description": {
    border: "1px solid black",
    background: StyleConstants.EDUCATION_BG,
    padding: 15,
    width: 450,
    [theme.breakpoints.down("md")]: {
      width: 350,
    },
    boxSizing: "border-box",
    animation: `${slideIn} 1s ease-in-out`,
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: 0,
    "&.reverse": {
      flexDirection: "column",
    },
  },
}));

export const Education = ({ education, ind }: Prop) => {
  return (
    <EducationWrapper className={clsx({ reverse: ind % 2 !== 0 })}>
      <div className="span">{education.span}</div>
      <div className="connector"></div>
      <div className="description">
        <div>{education.name}</div>
        <div>{education.location}</div>
        <div>
          {education.course}
          {education.specialization && ` - ${education.specialization}`}
        </div>
        <div>{education.score}</div>
      </div>
    </EducationWrapper>
  );
};
