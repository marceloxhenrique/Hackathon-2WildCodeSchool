import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";

export default function InfosTech() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Typography variant="h2" color="initial">
          Infos Tech
        </Typography>
      </Container>
    </>
  );
}
