import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";
import logo from "../assets/logoEmmausConnect.svg";
import Chat from "../components/Chat";
import Compagnon from "../assets/Compagnon.svg";

export default function Evaluation() {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <img src={logo} alt="logo" width="30%" />
        <Typography variant="h4" color="secondary" gutterBottom>
          Salut! Moi c'est Smart Compagnon
        </Typography>
        <Typography variant="h6" color="secondary" gutterBottom>
          Je suis là pour t'aider dans tes recherches
        </Typography>
        <img src={Compagnon} alt="bot" width="15%" />
        <Typography variant="h6" color="secondary" gutterBottom>
          Pose moi une question
        </Typography>
        <Chat />
      </Container>
    </>
  );
}
