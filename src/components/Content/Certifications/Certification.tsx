import { Box, styled, Button } from "@mui/material";
import { CustomButton } from "../../../styles/sectionStyles";
import { StyleConstants } from "../../../styles/StyleConstants";
import { keyframes } from "@emotion/react";

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CertificationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: StyleConstants.SPACE_BETWEEN_SECTIONS,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  animation: `${slideInFromLeft} 0.5s ease-in-out`,
}));

const InfoWrapper = styled(Box)(() => ({
  paddingRight: 15,
  lineHeight: 1.53,
  "& .name": {
    marginBottom: 15,
    fontSize: StyleConstants.SIZE_ITEM_TITLE,
  },
  "& .actions": {
    margin: "12px 0",
  },
  animation: `${fadeIn} 0.5s ease-in-out`,
}));

const ImageBox = styled(Box)(({ theme }) => ({
  marginRight: 10,
  width: 400,
  minHeight: 250,
  border: "1px solid black",
  "& img": {
    width: 400,
  },
  [theme.breakpoints.down("sm")]: {
    width: 350,
    "& img": {
      width: 350,
    },
  },
  animation: `${fadeIn} 0.5s ease-in-out`,
}));

interface certficate {
  name?: string;
  org?: string;
  issued?: string;
  expiry?: string;
  credentialId?: string;
  credentialUrl?: string;
  url?: string;
}

interface Prop {
  certficate: certficate;
}

export const Certification = ({ certficate }: Prop) => {
  const {
    name = "",
    org = "",
    issued = "",
    expiry = "",
    credentialId = "",
    credentialUrl = "",
    url = "",
  } = certficate;

  return (
    <CertificationWrapper>
      <InfoWrapper style={{ animation: `${fadeIn} 0.5s ease-in-out` }}>
        <div className="name bold">{name}</div>
        <div>
          <b>Org:</b> {org}
        </div>
        <div>
          <b>Issued:</b> {issued}
        </div>
        {expiry && (
          <div>
            <b>Expiry:</b> {expiry}
          </div>
        )}
        {credentialId && (
          <div>
            <b>Id:</b> {credentialId}
          </div>
        )}
        <div className="actions">
          <CustomButton>
            <a href={credentialUrl} target="_blank" rel="noreferrer">
              Certificate
            </a>
          </CustomButton>
        </div>
      </InfoWrapper>
      <ImageBox style={{ animation: `${fadeIn} 0.5s ease-in-out` }}>
        <img src={url} alt="certificate" />
      </ImageBox>
    </CertificationWrapper>
  );
};
