import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";
import logo from "../assets/logoEmmausConnect.svg";

export default function Evaluation() {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <img src={logo} alt="logo" width="20%" />
        <Typography variant="h2" color="initial">
          Evaluation Téléphone
        </Typography>
      </Container>
    </>
  );
}
