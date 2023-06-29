import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function WorkCard({ phone }) {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardContent sx={{ m: 2 }}>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {phone.brand}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {phone.model}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {phone.os}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Statut : {phone.state}
        </Typography>
      </CardContent>
      <CardContent sx={{ m: 2 }}>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {phone.brand}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {phone.model}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {phone.os}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Statut : {phone.state}
        </Typography>
      </CardContent>
    </Card>
  );
}

WorkCard.propTypes = {
  phone: PropTypes.shape({
    brand: PropTypes.string,
    model: PropTypes.string,
    os: PropTypes.string,
    state: PropTypes.string,
  }),
};

WorkCard.defaultProps = {
  phone: {
    brand: "Apple",
    model: "iPhone 8",
    state: "Reconditionné",
  },
};
