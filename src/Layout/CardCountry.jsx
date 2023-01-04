import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import image from '../../OIP.jpeg'

const CardCountry = () => {
  return (
    <Card sx={{
      mt:12
    }}>
      <CardMedia title="Countrty Flag" image='../../OIP.jpeg'  sx={{
          height:180
        }}/>
      <CardContent>
        <Typography component="h2" variant="h5">
          Country 1
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardCountry;
