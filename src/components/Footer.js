import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import GitHubLogo from "../assets/icons/github.jpg";
import LinkedInLogo from "../assets/icons/linkedIn.jpg";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: "30px",
        mb: "5px",
        width: "100%",
        height: "300px",
        backgroundColor: "#2D3324",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" color="#fff">
        Made with ❤️ by
      </Typography>
      <Typography
        variant="h2"
        sx={{ fontFamily: "'Dancing Script', cursive", color: "#fff" }}
      >
        Waris Hasan
      </Typography>
      <Typography variant="h6" color="#fff">
        Software Developer
      </Typography>
      <Stack direction="column" mt="40px">
        <Typography variant="h6" color="#fff">
          Click to check my profiles
        </Typography>
        <Stack direction="row" width="230px" justifyContent="space-around">
          <a
            href="https://www.linkedin.com/in/waris-hasan-27807b1aa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedInLogo}
              alt="linkedIn"
              height="50px"
              style={{ borderRadius: "10px" }}
            />
          </a>
          <a
            href="https://github.com/waris-hasan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GitHubLogo}
              alt="github"
              height="50px"
              style={{ borderRadius: "10px" }}
            />
          </a>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
