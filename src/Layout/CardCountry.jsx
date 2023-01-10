import React from "react";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CardCountry = ({ name, population, flag, region, capital, area }) => {
  return (
    <Link
      to={`country/${area}`}
      style={{
        textDecoration: "none",
      }}
    >
      <Card
        component={motion.div}
        elevation={5}
        whileHover={{ scale: 1.02 }}
        sx={{
          maxWidth: 350,
          minWidth: 235,
          maxHeight: 350,
        }}
      >
        <CardMedia
          title="Countrty Flag"
          image={flag}
          sx={{
            height: 180,
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
            variant="h5"
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
              variant="subtitle1"
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
              variant="subtitle1"
              noWrap
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
              variant="subtitle1"
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
              variant="subtitle1"
              color="text.primary"
              sx={{ fontWeight: "300", opacity: "0.8" }}
              noWrap
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
              variant="subtitle1"
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
              variant="subtitle1"
              noWrap
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
