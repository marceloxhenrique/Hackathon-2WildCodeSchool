import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import CreateBrand from "./CreateBrand";

function PhoneSpecs() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" color="secondary" sx={{ my: 2 }}>
        Caractéristiques Téléphones
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          my: 4,
          justifyContent: "space-evenly",
        }}
      >
        <Button
          onClick={handleClick}
          variant="contained"
          color="secondary"
          sx={{ p: 1.5 }}
        >
          Marque
        </Button>
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={open}
        >
          <Box sx={{ width: 400 }}>
            <Paper>
              <CreateBrand />
              <Button
                size="small"
                variant="contained"
                onClick={handleClose}
                sx={{ m: 2 }}
              >
                Fermer
              </Button>
            </Paper>
          </Box>
        </Backdrop>
        <Button variant="contained" color="secondary">
          Système
        </Button>
        <Button variant="contained" color="secondary">
          Modèle
        </Button>
        <Button variant="contained" color="secondary">
          Couleur
        </Button>
        <Button variant="contained" color="secondary">
          Mémoire
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          gap: 4,
          my: 4,
        }}
      >
        <Button variant="contained" color="secondary">
          Stockage
        </Button>
        <Button variant="contained" color="secondary">
          État
        </Button>
        <Button variant="contained" color="secondary">
          Catégorie
        </Button>
        <Button variant="contained" color="secondary">
          Réseau
        </Button>
        <Button variant="contained" color="secondary">
          Taille Écran
        </Button>
      </Box>
    </Container>
  );
}

export default PhoneSpecs;
