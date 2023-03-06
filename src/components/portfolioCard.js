import React from "react";
import { StyledButton } from "../universal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const PortfolioCard = ({ project }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { md: "space-between" },
        alignItems: { xs: "center", md: "flex-end"},
        width: "100%",
        columnGap: { md: "40px" },
      }}
    >
      <Box
        sx={{
          width: { xs: "80%", md: "55%" },
          display: {
            xs: "flex",
            md: project.id % 2 !== 0 ? "flex" : "none",
          },
        }}
      >
        <Box
          component="img"
          sx={{
            height: "auto",
            objectFit: "cover",
            overflow: "hidden",
          }}
          src={project.image}
          alt={project.imageLabel}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: {md: "flex-end"},
          alignItems: { xs: "center", md: "flex-start"},
        }}
      >
        <Typography variant="h2" sx={{ textTransform: "lowercase" }}>
          {project.name}
        </Typography>
        <Typography variant="h6" sx={{ fontStyle: "italic" }}>
          {project.techStack}
        </Typography>
        <Typography variant="h6">{project.description}</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: "12px",
            paddingTop: "20px",
          }}
        >
          {project.website?.length > 0 && (
            <StyledButton
              variant="outlined"
              href={project.website}
              target="_blank"
            >
              website
            </StyledButton>
          )}
          {project.demo?.length > 0 && (
            <StyledButton
              variant="outlined"
              href={project.demo}
              target="_blank"
            >
              demo
            </StyledButton>
          )}
          {project.code?.length > 0 && (
            <StyledButton
              variant="outlined"
              href={project.code}
              target="_blank"
            >
              code
            </StyledButton>
          )}
          {project.mockup?.length > 0 && (
            <StyledButton
              variant="outlined"
              href={project.mockup}
              target="_blank"
            >
              mockup
            </StyledButton>
          )}
            {project.publication?.length > 0 && (
            <StyledButton
              variant="outlined"
              href={project.publication}
              target="_blank"
            >
              publication
            </StyledButton>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            md: project.id % 2 === 0 ? "flex" : "none",
          },
          width: "55%",
        }}
      >
        <Box
          component="img"
          sx={{
            height: "auto",
            objectFit: "cover",
            overflow: "hidden",
          }}
          src={project.image}
          alt={project.imageLabel}
        />
      </Box>
    </Box>
  );
};
