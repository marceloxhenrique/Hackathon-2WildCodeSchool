import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar";
import logo from "../assets/logoEmmausConnect.svg";

export default function Home() {
  const navigate = useNavigate();

  const handleLinkEval = () => {
    navigate("/evaluation");
  };
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <img src={logo} alt="logo" width="60%" />
        <Typography variant="h3" color="primary" sx={{ mt: 4 }}>
          Bienvenue chez SMART COMPAGNON
        </Typography>
        <Typography variant="h5" color="secondary">
          Le compagnon EMMAÜS qui vous accompagne dans l'évaluation des
          Téléphones
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 4, borderRadius: 5, p: 1.5, color: "white" }}
          onClick={handleLinkEval}
        >
          Evaluer un Nouveau Téléphone
        </Button>
      </Container>
    </>
  );
}
