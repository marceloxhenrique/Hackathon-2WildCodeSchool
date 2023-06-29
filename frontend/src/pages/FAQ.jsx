import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";
import Faq from "../components/FAQ/Faq";
import logo from "../assets/logoEmmausConnect.svg";

export default function FAQ() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <img src={logo} alt="logo" width="20%" />
        <Typography variant="h2" color="initial" sx={{ marginTop: "2rem" }}>
          Foire Aux Questions
        </Typography>
        <Faq />
      </Container>
    </>
  );
}
