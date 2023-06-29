import React from "react";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Navbar from "../components/Navbar";
import NavAdmin from "../components/Admin/NavAdmin";

export default function Admin() {
  return (
    <>
      <Navbar />
      <Container maxWidth="xxl" sx={{ mt: 2 }}>
        <Typography variant="h4" color="primary" sx={{ py: 2 }}>
          Page Administrateur
        </Typography>
        <Divider light />
        <Grid container spacing={2}>
          <Grid item xs={12} md={3.5}>
            <NavAdmin />
            <Divider orientation="vertical" />
          </Grid>
          <Grid item xs={12} md={8.5}>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
