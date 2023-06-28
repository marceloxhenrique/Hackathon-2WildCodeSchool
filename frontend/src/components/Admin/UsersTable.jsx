import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "fullname", headerName: "Full Name", width: 120 },
  {
    field: "email",
    headerName: "Email",
    type: "email",
    width: 200,
  },
  { field: "city", headerName: "City", width: 100 },
  { field: "phone", headerName: "Phone", width: 130 },
];

const config = {
  method: "get",
  maxBodyLength: Infinity,
  url: `${BACKEND_URL}/users`,
  headers: {},
};

export default function UsersTable() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .request(config)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" color="secondary" gutterBottom sx={{ mt: 4 }}>
        Liste des Utilisateurs
      </Typography>
      <DataGrid
        id="users-list"
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
      />
    </Container>
  );
}
