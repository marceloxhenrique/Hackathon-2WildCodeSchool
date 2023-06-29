import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";
import Faq from "../components/FAQ/Faq";

export default function FAQ() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Typography variant="h2" color="initial" sx={{ marginTop: "2rem" }}>
          Foire Aux Questions
        </Typography>
        <Faq />
      </Container>
    </>
  );
}
