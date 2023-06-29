import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Navbar from "../components/Navbar";
// import header from "../assets/phones.jpg";
import NewsCard from "../components/InfosTech/NewsCard";
import NewsCardEmmaus from "../components/InfosTech/NewsCardEmmaus";

export default function InfosTech() {
  return (
    <>
      <Navbar />
      <Container maxWidth="xxl">
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" color="secondary" sx={{ my: 2 }}>
              Infos Tech
            </Typography>
            <NewsCard />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" color="secondary" sx={{ my: 2 }}>
              Infos Emmaüs
            </Typography>
            <NewsCardEmmaus />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
