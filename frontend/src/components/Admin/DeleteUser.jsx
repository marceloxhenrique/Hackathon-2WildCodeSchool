import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DeleteUser() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const notify = () => toast.success("Suppression Effectuée");

  const [userId, setUserId] = useState("");

  const handleUserInputChange = (event) => {
    setUserId(parseInt(event.target.value, 10));
  };

  const handleDeleteUser = (event) => {
    event.preventDefault();

    if (userId) {
      axios
        .delete(`${BACKEND_URL}/users/${userId}`)
        .then(() => {
          setUserId("");
          notify();
        })
        .catch(() => notify("problème à la suppression"));
    }
  };
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h5" color="secondary" sx={{ m: 2 }}>
          Supprimer un Utilisateur
        </Typography>
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleDeleteUser}
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TextField
              id="delete-candidate"
              label="Entrer l'ID du Candidat à supprimer"
              name="id"
              sx={{ width: "30%" }}
              value={userId}
              onChange={handleUserInputChange}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ m: 3 }}
              color="error"
              startIcon={<DeleteIcon />}
            >
              Supprimer
            </Button>
          </Box>
        </Box>
      </Container>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
