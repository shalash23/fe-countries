import React from "react";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import {Link} from 'react-router-dom'

const CardCountry = ({ name, population, flag, region, capital }) => {
  return (
    <Link to={`country/${name}`} style={{
      textDecoration:'none'
    }}>
    <Card
      onClick={() => {
        
      }}
      sx={{
        mt: 12,
        maxWidth: 475,
      }}
    >
      <CardMedia
        title="Countrty Flag"
        image={flag}
        sx={{
          height: 240,
        }}
      />
      <CardContent
        sx={{
          px: 3,
        }}
      >
        <Typography
          component="h2"
          noWrap
          variant="h4"
          sx={{
            fontWeight: "800",
            mb: 2,
          }}
        >
          {name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Typography
            component="p"
            variant="h6"
            color="text.primary"
            sx={{
              fontWeight: "300",
              mr: 1,
            }}
          >
            Population:
          </Typography>
          <Typography
            component="h3"
            variant="h6"
            color="text.primary"
            sx={{ fontWeight: "300", opacity: "0.8" }}
          >
            {population}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography
            component="p"
            variant="h6"
            color="text.primary"
            sx={{
              fontWeight: "300",
              mr: 1,
            }}
          >
            Region:
          </Typography>
          <Typography
            component="h3"
            variant="h6"
            color="text.primary"
            sx={{ fontWeight: "300", opacity: "0.8" }}
          >
            {region}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography
            component="h3"
            variant="h6"
            color="text.primary"
            sx={{
              fontWeight: "300",
              mr: 1,
            }}
          >
            Capital:
          </Typography>
          <Typography
            component="p"
            variant="h6"
            color="text.primary"
            sx={{ fontWeight: "300", opacity: "0.8" }}
          >
            {capital}
          </Typography>
        </Box>
      </CardContent>
    </Card>
        </Link>
  );
};

export default CardCountry;
