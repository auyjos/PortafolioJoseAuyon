import { Box, styled } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../store/types";
import { sectionImages } from "../utils";
import { setCurrentSection } from "./slice";
import Arrow from "../../../assets/arrow.png";
import { useNavigationSize } from "../../../hooks/useNavigationSize";
import { StyleConstants } from "../../../styles/StyleConstants";
import { keyframes } from "@emotion/react";

// Animation keyframes
const scaleUp = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;

const NavigationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: StyleConstants.NAVIGATION_BG,
  padding: "0 20px",
  borderRadius: 12,
  position: "sticky",
  top: 84,
  width: "100%",
  zIndex: 1,
  "& .nav-section": {
    padding: 8,
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      animation: `${scaleUp} 0.2s ease-in-out forwards`,
    },
  },
  "& .section-name": {
    width: 84,
    fontSize: 12,
    display: "flex",
    justifyContent: "center",
    borderRadius: 10,
  },
  "& .nav-item": {
    height: 70,
    width: 70,
    padding: 5,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: StyleConstants.SECTION_BORDER,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      height: 58,
      width: 58,
    },
  },
  "& .arrow": {
    margin: "10px 0 0 ",
    height: 70,
    width: 84,
    padding: 5,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "rotate(271deg)",
    "& img": {
      height: 58,
      width: 58,
      filter: "brightness(0) invert(1)", // Update the filter property to invert the color of the arrow image
    },
  },
  "& .before": {
    transform: "rotate(90deg)",
  },
  "& .disabled": {
    opacity: "0.1",
    pointerEvents: "none",
  },
  "& .active .nav-item": {
    backgroundColor: StyleConstants.ACTIVE_SECTION,
  },
  "& .active .section-name": {
    backgroundColor: StyleConstants.ACTIVE_SECTION,
  },
  [theme.breakpoints.down("md")]: {
    padding: 8,
    justifyContent: "center",
    "& .nav-section": {
      padding: "0 3px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column", // Change the direction to column for smaller screens
    alignItems: "center", // Center align items vertically
    top: 0, // Remove the sticky position for smaller screens
  },
}));

export const NavigationList = () => {
  const dispatch = useDispatch();
  const sections =
    useSelector((state: IRootState) => state.sections?.sections) || [];
  const selectedSection =
    useSelector((state: IRootState) => state.sections?.currentSection) || "";
  const filteredSections = sections.filter((sec) => !sec?.hide);
  const [start, setStart] = useState(0);
  const limit = useNavigationSize();

  return (
    <NavigationWrapper>
      {limit < filteredSections.length && (
        <Box
          className={`arrow before ${start === 0 && "disabled"}`}
          onClick={() => setStart((val) => val - 1)}
        >
          <img src={Arrow} alt="arrow" />
        </Box>
      )}
      {filteredSections.slice(start, start + limit).map((sec) => (
        <Box
          key={sec.key}
          className={`nav-section ${selectedSection === sec.key && "active"}`}
        >
          <Box
            className="nav-item"
            onClick={() => dispatch(setCurrentSection(sec.key))}
          >
            <img src={sectionImages[sec.key]} alt={sec.key} />
          </Box>
          <div className="section-name">{sec.name}</div>
        </Box>
      ))}
      {limit < filteredSections.length && (
        <Box
          className={`arrow after ${
            start === filteredSections.length - limit && "disabled"
          }`}
          onClick={() => setStart((val) => val + 1)}
        >
          <img src={Arrow} alt="arrow" />
        </Box>
      )}
    </NavigationWrapper>
  );
};
