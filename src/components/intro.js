import React from "react";
import Typography from "@mui/material/Typography";
import { PortfolioButton } from "../universal";
import Box from "@mui/material/Box";

export const Intro = ({ portfolioRef }) => {
  const scrollIntoView = (type) => {
    portfolioRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const flowers = [];

  for (let i = 0; i < 9; i++) {
    flowers.push(
      <Box
        component="img"
        src={"./flower-cropped.png"}
        sx={{ height: "50px" }}
      />
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        minWidth: { xs: "calc(100vw - 100px)", md: "800px" },
        width: { xs: "calc(100vw - 100px)", md: "800px" },
        minHeight: { xs: "calc(100vh - 100px)", md: "calc(100vh - 160px)" },
        py: { xs: "50px", md: "80px" },
        rowGap: "20px",
      }}
    >
      <Typography variant="h1" sx={{ textTransform: "lowercase" }}>
        {"hello, i'm alice qiao :)"}
      </Typography>
      <Typography variant="h4">
        {
          "i’m a software engineer, figure skater, dancer, plant enthusiast, board game fanatic"
        }
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
      >{flowers}</Box>
      <PortfolioButton variant="outlined" onClick={scrollIntoView}>
        check out my portfolio!
      </PortfolioButton>
    </Box>
  );
};
