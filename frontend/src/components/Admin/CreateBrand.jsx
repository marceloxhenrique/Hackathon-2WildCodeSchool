import * as React from "react";
import { useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminCreate() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const notifyCreation = () => toast.success("Nouvel Utilisateur Enregistré!");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    terms: false,
  });

  const validateForm = () => {
    // add email Validation
    return true;
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmitBrand = (event) => {
    event.preventDefault();

    if (validateForm()) {
      axios
        .post(`${BACKEND_URL}/brands`, { ...formData })
        .then(() => {
          // Clear the form data after successful submission
          setFormData({
            brand: "",
            terms: false,
          });
          notifyCreation();
        })
        .catch(() => console.warn("registration problem"));
    }
  };

  return (
    <>
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          pt: "6rem",
          pb: "3rem",
        }}
      >
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Enregistrer une Nouvelle Marque
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmitBrand}
            sx={{ mt: 3 }}
          >
            <TextField
              name="brand"
              required
              fullWidth
              id="brandName"
              label="Brand Name"
              autoFocus
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Enregistrer
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
