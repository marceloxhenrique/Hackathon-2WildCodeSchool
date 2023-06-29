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
import ChatBot from "./pages/ChatBot";
import ChooseAction from "./components/Admin/ChooseAction";
import CreateUser from "./components/Admin/CreateUser";
import DeleteUser from "./components/Admin/DeleteUser";
import UsersTable from "./components/Admin/UsersTable";
import PhonesTable from "./components/Admin/PhonesTable";
import PhonesSpecs from "./components/Admin/PhonesSpecs";
import { UserContextProvider } from "./contexts/UserContext";

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
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/evaluation" element={<Evaluation />} />
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/admin" element={<Admin />}>
              <Route index element={<ChooseAction />} />
              <Route path="create-user" element={<CreateUser />} />
              <Route path="delete-user" element={<DeleteUser />} />
              <Route path="users-list" element={<UsersTable />} />
              <Route path="phones-list" element={<PhonesTable />} />
              <Route path="phones-specs" element={<PhonesSpecs />} />
            </Route>
            <Route path="/faq" element={<FAQ />} />
            <Route path="/profil" element={<UserProfile />} />
            <Route path="/infos-tech" element={<InfosTech />} />
            <Route path="/logout" element={<Login />} />
          </Routes>
        </UserContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
