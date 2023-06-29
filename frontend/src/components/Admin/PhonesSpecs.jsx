import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import Grid from "@mui/material/Grid";
import CreateBrand from "./CreateBrand";
import DeleteBrand from "./DeleteBrand";
import CreateSystem from "./CreateSystem";
import DeleteSystem from "./DeleteSystem";

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
          <Box sx={{ width: 800 }}>
            <Paper>
              <Grid container spacing={2}>
                <Grid item md={6}>
                  <CreateBrand />
                </Grid>
                <Grid item md={6}>
                  <DeleteBrand />
                </Grid>
                <Grid item md={12}>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={handleClose}
                    sx={{ m: 2 }}
                  >
                    Fermer
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Backdrop>
        <Button
          onClick={handleClick}
          variant="contained"
          color="secondary"
          sx={{ p: 1.5 }}
        >
          Système
        </Button>
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={open}
        >
          <Box sx={{ width: 1000 }}>
            <Paper>
              <Grid container spacing={2}>
                <Grid item md={6}>
                  <CreateSystem />
                </Grid>
                <Grid item md={6}>
                  <DeleteSystem />
                </Grid>
                <Grid item md={12}>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={handleClose}
                    sx={{ m: 2 }}
                  >
                    Fermer
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Backdrop>
        <Button
          onClick={handleClick}
          variant="contained"
          color="secondary"
          sx={{ p: 1.5 }}
        >
          Modèle
        </Button>
        <Button
          onClick={handleClick}
          variant="contained"
          color="secondary"
          sx={{ p: 1.5 }}
        >
          Couleur
        </Button>
        <Button
          onClick={handleClick}
          variant="contained"
          color="secondary"
          sx={{ p: 1.5 }}
        >
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
        <Button
          onClick={handleClick}
          variant="contained"
          color="secondary"
          sx={{ p: 1.5 }}
        >
          Stockage
        </Button>
        <Button
          onClick={handleClick}
          variant="contained"
          color="secondary"
          sx={{ p: 1.5 }}
        >
          État
        </Button>
        <Button
          onClick={handleClick}
          variant="contained"
          color="secondary"
          sx={{ p: 1.5 }}
        >
          Catégorie
        </Button>
        <Button
          onClick={handleClick}
          variant="contained"
          color="secondary"
          sx={{ p: 1.5 }}
        >
          Réseau
        </Button>
        <Button
          onClick={handleClick}
          variant="contained"
          color="secondary"
          sx={{ p: 1.5 }}
        >
          Taille Écran
        </Button>
      </Box>
    </Container>
  );
}

export default PhoneSpecs;
