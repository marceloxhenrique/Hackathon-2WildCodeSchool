import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function ChooseAction() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" color="secondary" sx={{ pt: 5 }}>
        Choisissez l'action à réaliser
      </Typography>
    </Container>
  );
}
