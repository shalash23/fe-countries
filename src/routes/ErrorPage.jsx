import { useRouteError } from "react-router-dom";
import { Container, Typography, Paper } from "@mui/material";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container maxWidth={false}>
      <Paper></Paper>
      <Typography component="h2" variant="h2">
        Oops!
      </Typography>
      <Typography component="p" variant="body2">
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography component="p" variant="body1">
        <i>{error.statusText || error.message}</i>
      </Typography>
    </Container>
  );
}
