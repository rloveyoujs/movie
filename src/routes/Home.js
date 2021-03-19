import { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import Movie from "../components/Movie";
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

export default function Home() {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState({});

  useEffect(() => {
    async function fetchData() {
      const {
        data: {
          data: { movies },
        },
      } = await axios.get(
        "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
      );

      setMovies(movies);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      <Navigation name="Home" />
      <Container className={classes.root}>
        {loading ? (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.grid}
          >
            <Grid item>
              <CircularProgress />
            </Grid>
          </Grid>
        ) : (
          <>
            <Grid container spacing={6}>
              <Grid item xs={12}></Grid>
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  summary={movie.summary}
                  year={movie.year}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  rating={parseInt(movie.rating / 2)}
                />
              ))}
              <Grid item xs={12}></Grid>
            </Grid>
          </>
        )}
      </Container>
    </>
  );
}
