import React from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function NavAdmin() {
  const navigate = useNavigate();
  const handleLinkCreate = () => {
    navigate("create-user");
  };
  const handleLinkDelete = () => {
    navigate("delete-user");
  };
  const handleLinkUsers = () => {
    navigate("users-list");
  };
  const handleLinkPhones = () => {
    navigate("phones-list");
  };
  const handleLinkSpecs = () => {
    navigate("phones-specs");
  };

  return (
    <Stack
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      divider={<Divider orientation="vertical" flexItem />}
      sx={{ p: 4 }}
    >
      <Button size="large" variant="text" onClick={handleLinkUsers}>
        Liste des Utilisateurs
      </Button>
      <Button size="large" variant="text" onClick={handleLinkCreate}>
        Ajouter un Nouvel Utilisateur
      </Button>
      <Button size="large" variant="text" onClick={handleLinkDelete}>
        Supprimer un Utilisateur
      </Button>
      <Button size="large" variant="text" onClick={handleLinkPhones}>
        Liste des Téléphones
      </Button>
      <Button size="large" variant="text" onClick={handleLinkSpecs}>
        Caractéristiques
      </Button>
    </Stack>
  );
}

export default NavAdmin;
