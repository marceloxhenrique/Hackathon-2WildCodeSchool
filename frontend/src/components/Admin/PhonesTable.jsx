import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "brand", headerName: "Marque", width: 70 },
  {
    field: "model",
    headerName: "Modèle",
    width: 70,
  },
  { field: "network", headerName: "Réseau", width: 70 },
  { field: "color", headerName: "Couleur", width: 70 },
  { field: "os", headerName: "Système", width: 70 },
  { field: "memory", headerName: "RAM", width: 70 },
  { field: "storage", headerName: "Stockage", width: 70 },
  { field: "state", headerName: "État", width: 70 },
  { field: "size", headerName: "Taille Écran", width: 70 },
  { field: "category", headerName: "Catégorie", width: 70 },
  { field: "val_min", headerName: "Valeur Min", width: 70 },
  { field: "val_max", headerName: "Valeur Max", width: 70 },
];

const config = {
  method: "get",
  maxBodyLength: Infinity,
  url: `${BACKEND_URL}/phones`,
  headers: {},
};

export default function PhonesTable() {
  const [phones, setPhones] = useState([]);

  const getPhones = () => {
    axios
      .request(config)
      .then((response) => {
        setPhones(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getPhones();
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" color="secondary" gutterBottom sx={{ mt: 4 }}>
        Liste des Téléphones
      </Typography>
      <DataGrid
        id="phones-list"
        rows={phones}
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
