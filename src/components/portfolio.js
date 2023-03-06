import React from "react";
import { PortfolioCard } from "./portfolioCard";
import projectlist from "./projectList";
import Box from "@mui/material/Box";

export const Portfolio = ({ portfolioRef }) => {
  let projects = projectlist.map((project) => {
    return <PortfolioCard key={project.id} project={project} />;
  });
  return (
    <Box
      component="div"
      ref={portfolioRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: { xs: "calc(100vh - 100px)", md: "calc(100vh - 160px)" },
        py: { xs: "50px", md: "80px" },
        rowGap: { xs: "80px", md: "120px" },
        width: "100%"
      }}
    >
      {projects}
    </Box>
  );
};
