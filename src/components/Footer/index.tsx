import { styled, Box, Stack, Link, Divider } from "@mui/material";
import { StyleConstants } from "../../styles/StyleConstants";
import Contact from "../../data/Contact.json";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { CustomButtonFooter } from "../../styles/sectionStyles";

const FooterContainer = styled(Box)(({ theme }) => ({
  height: 150,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#222222", // Update the color here to a lighter shade that matches the color scheme
  bottom: 0,
  zIndex: 1,
  fontWeight: 600,
  "& .mail": {
    display: "flex",
    padding: 6,
    minWidth: 350,
    justifyContent: "center",
    alignItems: "center",
    "& svg": {
      paddingRight: 12,
      fontSize: 32,
      color: StyleConstants.WHITE_COLOR, // Set the color to white
    },
  },
  "& .links": {
    display: "flex",
    padding: 6,
    width: 350,
    justifyContent: "space-between",
    "& svg": {
      paddingRight: 12,
      fontSize: 32,
      color: StyleConstants.WHITE_COLOR, // Set the color to white
    },
  },
  "& .divider": {
    height: 7,
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    width: "95%",
  },
  "& .creator": {
    fontSize: 12,
    opacity: 0.85,
    padding: "0 0 5px",
    "& a": {
      textDecoration: "none",
      color: StyleConstants.WHITE_COLOR, // Set the color to white
      "&:hover": {
        color: StyleConstants.HEADER,
      },
    },
  },
  "& .actions": {
    padding: 5,
    "& button": {
      marginRight: 6,
    },
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));

export const Footer = () => {
  const { emailId = "", linkedIn = "", twitter = "", github = "" } = Contact;

  return (
    <FooterContainer>
      <Box className="mail">
        <EmailIcon /> {emailId}
      </Box>
      <Box className="links">
        {github && (
          <div>
            <Link href={github} target="_blank" style={{ color: StyleConstants.WHITE_COLOR }}>
              <GitHubIcon />
            </Link>
          </div>
        )}
        {linkedIn && (
          <div>
            <Link href={linkedIn} target="_blank" style={{ color: StyleConstants.WHITE_COLOR }}>
              <LinkedInIcon />
            </Link>
          </div>
        )}
        {twitter && (
          <div>
            <Link href={twitter} target="_blank" style={{ color: StyleConstants.WHITE_COLOR }}>
              <TwitterIcon />
            </Link>
          </div>
        )}
      </Box>
      <Box className="divider" />
    </FooterContainer>
  );
};
