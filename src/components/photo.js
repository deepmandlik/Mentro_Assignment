import React, { useState, useEffect } from "react";
import "../App.css";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import img1 from "../media/image1.png";
import img2 from "../media/image2.png";
import img3 from "../media/image3.png";
import img4 from "../media/image4.png";
import img5 from "../media/image5.png";

function Photo({ person, left, right, index }) {
  const [image, setImage] = useState(img1);

  useEffect(() => {
    if (index === 0) {
      setImage(img1);
    } else if (index === 1) {
      setImage(img2);
    } else if (index === 2) {
      setImage(img3);
    } else if (index === 3) {
      setImage(img4);
    } else if (index === 4) {
      setImage(img5);
    }
  }, [index]);

  return (
    <Box>
      <Box mt={35}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <IconButton
            aria-label="arrow"
            sx={{
              backgroundColor: "#4CAF50",
              "&:hover": {
                backgroundColor: "#4CAF50",
              },
            }}
            onClick={left}
          >
            <ArrowDownwardIcon size="medium" sx={{ color: "#FFF" }} />
          </IconButton>
          <Box
            sx={{
              backgroundColor: "rgba(0, 162, 7, 0.17)",
              borderRadius: "50%",
              width: "220px",
              height: "220px",
            }}
          >
            <img
              src={image}
              alt="image1"
              style={{ width: "220px", height: "220px", borderRadius: "50%" }}
            ></img>
          </Box>
          <IconButton
            aria-label="arrow"
            sx={{
              backgroundColor: "#4CAF50",
              "&:hover": {
                backgroundColor: "#4CAF50",
              },
            }}
            onClick={right}
          >
            <ArrowDownwardIcon size="medium" sx={{ color: "#FFF" }} />
          </IconButton>
        </Box>
        <Box mt={4} display="flex" justifyContent="center">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: "rgba(0, 162, 7, 0.17)",
              borderRadius: "10px",
              width: "250px",
              height: "60px",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: 600,
                fontFamily: "Poppins",
                fontSize: "20px",
                letterSpacing: "0.015em",
                color: "#000",
              }}
            >
              {person.name}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Photo;
