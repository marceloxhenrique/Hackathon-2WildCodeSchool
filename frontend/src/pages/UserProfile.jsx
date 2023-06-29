import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Navbar from "../components/Navbar";
import WorkCard from "../components/User/WorkCard";
import UserCard from "../components/User/UserCard";
import { useUserContext } from "../contexts/UserContext";

export default function UserProfile() {
  const { user } = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.id) {
      navigate("/login");
    }
  }, []);

  const [phones, setPhones] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${BACKEND_URL}/user-phones/${user.id}`,
    headers: {},
  };

  const getPhones = () => {
    axios
      .request(config)
      .then((response) => {
        setPhones(response.data);
        console.warn(phones);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getPhones();
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth="xxl" sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h3" color="initial" sx={{ m: 3 }}>
          Profil utilisateur
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "column", lg: "row", xl: "row" },
          }}
        >
          <Grid
            item
            xs={12}
            lg={5}
            elevation={3}
            sx={{
              position: { lg: "fixed" },
            }}
          >
            <UserCard user={user} />
          </Grid>
        </Box>
        <Grid container spacing={4} justifyContent="flex-end">
          <Grid item xs={12} lg={7.5} elevation={3}>
            <Typography
              variant="h6"
              color="initial"
              sx={{
                p: 2,
                backgroundColor: "secondary.main",
                color: "white",
                borderRadius: 2,
              }}
            >
              Mes smartphones enregistrés
            </Typography>
            <Paper sx={{ height: "100%" }}>
              {phones.map((phone) => (
                <>
                  <WorkCard key={phone.model} phone={phone} />
                  <Divider key={phone.id} />
                </>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
