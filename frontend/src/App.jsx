import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";
import "./App.css";
import Login from "./pages/Login";
import Evaluation from "./pages/Evaluation/Evaluation";
import Admin from "./pages/Admin";
import FAQ from "./pages/FAQ";
import UserProfile from "./pages/UserProfile";
import InfosTech from "./pages/InfosTech";

function App() {
  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#002743",
      },
      secondary: {
        main: "#00ACB0",
      },
    },
    spacing: 10,
    typography: {
      fontFamily: "Fira Sans",
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/evaluation" element={<Evaluation />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/infos-tech" element={<InfosTech />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
