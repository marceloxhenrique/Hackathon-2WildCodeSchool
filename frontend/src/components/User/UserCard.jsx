import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

export default function UserCard({ user }) {
  return (
    <Card sx={{ maxWidth: "100%", mb: { xs: 3, md: 3 } }}>
      <Box
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <CardContent sx={{ mx: 2 }}>
          <Typography gutterBottom variant="h4" component="div">
            {user.fullname.charAt(0).toUpperCase() + user.fullname.slice(1)}{" "}
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {user.city}
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {user.email}
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {user.phone}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="small">
            <DriveFileRenameOutlineIcon />
            Modifier mes Informations
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    fullname: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    city: PropTypes.string,
  }),
};

UserCard.defaultProps = {
  user: {
    fullname: "nom du compagnon",
    phone: "06.03.04.04.06",
    email: "compagnon@mail.com",
    city: "Lyon",
  },
};
