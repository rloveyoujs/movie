import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Navigation from "../components/Navigation";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
  grid: {
    height: "100%",
  },
}));

export default function Detail({ location }) {
  const classes = useStyles();

  const { title } = location.state;

  return (
    <>
      <Navigation name="Detail" />
      <Container className={classes.root}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.grid}
        >
          <Grid item>{title}</Grid>
        </Grid>
      </Container>
    </>
  );
}
