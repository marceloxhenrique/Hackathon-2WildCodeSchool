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

export default function DeleteBrand() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const notify = () => toast.success("Suppression Effectuée");

  const [brandId, setBrandId] = useState("");

  const handlebrandInputChange = (event) => {
    setBrandId(parseInt(event.target.value, 10));
  };

  const handleDeleteBrand = (event) => {
    event.preventDefault();

    if (brandId) {
      axios
        .delete(`${BACKEND_URL}/brands/${brandId}`)
        .then(() => {
          setBrandId("");
          notify();
        })
        .catch(() => notify("problème à la suppression"));
    }
  };
  return (
    <>
      <Container maxWidth="lg" sx={{ pt: "6rem", pb: "3rem", width: 500 }}>
        <Typography variant="h5" color="error">
          Supprimer une Marque
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleDeleteBrand}
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: 400,
            }}
          >
            <TextField
              id="delete-candidate"
              label="Entrer l'ID du Candidat à supprimer"
              name="id"
              sx={{ width: "30%" }}
              value={brandId}
              onChange={handlebrandInputChange}
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
