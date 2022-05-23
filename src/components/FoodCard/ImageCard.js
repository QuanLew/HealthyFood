import React from "react";
import { Collapse, Typography, CardContent, CardMedia } from "@mui/material";
import { CardContainer } from "./FoodCardElements";

const ImageCard = ({ place, checked }) => {
  return (
    <Collapse in={checked} {...(checked ? { timeout: 900 } : {})}>
      <CardContainer sx={{ bgcolor: "rgba(0, 0, 0, 0.5)" }}>
        <CardMedia
          sx={{ height: "350px" }}
          component="img"
          // image={process.env.PUBLIC_URL + "/assets/Food1.webp"}
          image={place.imageUrl}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            sx={{ fontFamily: "Lobster", color: "#ddd", fontWeight: "bold" }}
            component="div"
          >
            {place.title}
          </Typography>
          <Typography
            variant="body3"
            color="text.secondary"
            sx={{ fontFamily: "Lobster", color: "#ddd" }}
          >
            {place.description}
          </Typography>
        </CardContent>
      </CardContainer>
    </Collapse>
  );
};

export default ImageCard;
