import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";

export default function FAQ() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Typography variant="h2" color="initial">
          FAQ
        </Typography>
      </Container>
    </>
  );
}
