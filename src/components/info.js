import * as React from "react";
import "../App.css";

import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";

function Info({person}) {
  return (
    <Box className="">
      <Typography
        sx={{
          fontWeight: 700,
          fontFamily: "Poppins",
          fontSize: "40px",
          letterSpacing: "0.015em",
          color: "#4CAF50",
        }}
        gutterBottom
      >
        {person.rating.toFixed(1)}
      </Typography>
      <Rating
        name="read-only"
        value={person.rating}
        readOnly
        size="large"
        sx={{ color: "#4CAF50", marginBottom: 2 }}
      />
      <Typography
        sx={{
          fontWeight: 600,
          fontFamily: "Poppins",
          fontSize: "35px",
          letterSpacing: "0.015em",
          transition: "1s ease-in-out"
        }}
        gutterBottom
      >
        {person.name}
      </Typography>
      <Typography
        sx={{
          fontWeight: 500,
          fontFamily: "Poppins",
          fontSize: "25px",
          letterSpacing: "0.015em",
          color: "#000",
        }}
        gutterBottom
      >
        {person.profile}
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontFamily: "Poppins",
          fontSize: "16px",
          letterSpacing: "0.015em",
          textAlign: "justify",
          color: "#000",
          marginTop: 5,
          width: "350px",
        }}
        gutterBottom
      >
        {person.description}
      </Typography>
      <Button
        variant="contained"
        color="success"
        sx={{
          width: "200px",
          height: "50px",
          fontWeight: 600,
          fontFamily: "Poppins",
          fontSize: "16px",
          letterSpacing: "0.015em",
          background: "#4CAF50",
          color: "#FFFFFF",
          borderRadius: 0,
          marginTop: 5,
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px",
        }}
      >
        Book a session
      </Button>
    </Box>
  );
}

export default Info;
